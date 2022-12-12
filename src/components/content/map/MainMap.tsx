import { Position } from "../../fragments/map/Map";
import { MarkTypes, EmergencyType, FacilityType } from "../../../api/enumCalls";
import { useTranslation } from "react-i18next";
import FormCheck from "../../fragments/forms/FormCheck";
import { Container, Form } from "react-bootstrap";
import { ambulanceIcon } from "./MapIcons";
import { useState, useEffect } from "react";
import { getAccidents, AccidentReportResponse } from "../../../api/accidentReportCalls";
import { getAmbulances, AmbulanceResponse } from "../../../api/ambulanceCalls";
import { getFacilities, FacilityResponse } from "../../../api/facilityCalls";
import MapView from "../../fragments/map/MapView";

interface Mark extends Position {
  type: MarkTypes
}

interface MapFormParams {
  filters: MarkTypes,
  setFilters: (x: MarkTypes) => void
}

const MapForm = (props: Readonly<MapFormParams>) => {
  const { t } = useTranslation();
  const values = [];

  for (const key in EmergencyType.values) {
    const vals = EmergencyType.values[key];
    const mark = vals.markType ?? MarkTypes.None;
    values.push(<FormCheck label={t(`${EmergencyType.name}.${key}`)} value={props.filters & mark} onChange={e => props.setFilters(props.filters ^ mark)} icon={vals.icon} />);
  }

  for (const key in FacilityType.values) {
    const vals = FacilityType.values[key];
    const mark = vals.markType ?? MarkTypes.None;
    values.push(<FormCheck label={t(`${FacilityType.name}.${key}`)} value={props.filters & mark} onChange={e => props.setFilters(props.filters ^ mark)} icon={vals.icon} />);
  }

  return (
    <Container>
      <h1 className="mt-3">{t("Map.Map")}</h1>
      <h3 className="mb-3">{t("Map.Filters")}:</h3>
      <Form className="w-75">
        <FormCheck label={t("Ambulance.Ambulance")} value={props.filters & MarkTypes.Ambulance} onChange={e => props.setFilters(props.filters ^ MarkTypes.Ambulance)} icon={ambulanceIcon} />
        {values}
      </Form>
    </Container>
  );
};

const MainMap = () => {
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [loaded, setLoaded] = useState(false);
  const [positions, setPositions] = useState<Mark[]>([]);
  const [facilities, setFacilities] = useState<Mark[]>([]);
  const [filters, setFilters] = useState(MarkTypes.All);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const accReq = getAccidents().then(res => res.json());
    const ambReq = getAmbulances().then(res => res.json());

    Promise.all([accReq, ambReq]).then((data: [AccidentReportResponse[], AmbulanceResponse[]]) => {
      if (data) {
        setPositions([...data[0].map(a => ({
          coords: [a.location.latitude, a.location.longitude] as [number, number],
          desc: a.address,
          type: EmergencyType.values?.[a.emergencyType].markType ?? MarkTypes.None,
          icon: EmergencyType.values?.[a.emergencyType].icon,
          to: `/reports/${a.accidentId}`
        })), ...data[1].map(a => ({
          coords: [a.currentLocation.latitude, a.currentLocation.longitude] as [number, number],
          desc: a.licensePlate,
          type: MarkTypes.Ambulance,
          icon: ambulanceIcon,
          to: `/ambulances/${a.licensePlate}`
        }))]);
      }
    }).catch(console.error);

    const timeout = setTimeout(() => setUpdate(!update), 15000);

    return () => {
      clearTimeout(timeout);
    };
  }, [update]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setCoords([pos.coords.latitude, pos.coords.longitude]);
      setLoaded(true);
    }, err => setLoaded(true));

    getFacilities().then(res => res.json()).then((data: FacilityResponse[]) => {
      if (data) {
        setFacilities(data.map(f => ({
          coords: [f.location.latitude, f.location.longitude],
          desc: f.name,
          type: FacilityType.values?.[f.facilityType].markType ?? MarkTypes.None,
          icon: FacilityType.values?.[f.facilityType].icon,
          to: `/facilities/${f.facilityId}`
        })));
      }
    }).catch(console.error);
  }, []);

  const marks = [...positions, ...facilities].filter(p => p.type & filters).map(e => ({
    coords: e.coords,
    desc: e.desc,
    icon: e.icon,
    to: e.to
  }));

  return <MapView isLoaded={loaded} center={coords} initialZoom={10} element={<MapForm filters={filters} setFilters={setFilters} />} marks={marks} />;
};

export default MainMap;
