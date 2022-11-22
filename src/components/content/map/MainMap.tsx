import { Position } from "../../fragments/map/Map";
import { accidentIcon, terroristIcon, fireIcon, ambulanceIcon, hospitalIcon, policeIcon, alertIcon, covidIcon } from "./MapIcons";
import { useTranslation } from "react-i18next";
import { Container, Form } from "react-bootstrap";
import FormCheck from "../../fragments/forms/FormCheck";
import { useState, useEffect } from "react";
import { getFacilities, FacilityResponse } from "../../../api/facilityCalls";
import MapView from "../../fragments/map/MapView";

enum MarkTypes {
  None = 0,
  Incident = 1,
  Terrorist = 2,
  Fire = 4,
  Ambulance = 8,
  Hospital = 16,
  Police = 32,
  Alert = 64,
  Covid = 128
}

interface Mark extends Position {
  type: MarkTypes
}

const positions: Mark[] = [
  { coords: [52.22, 21.01], desc: "Zdarzenie", type: MarkTypes.Incident, icon: accidentIcon, to: "/newreport" },
  { coords: [52.23, 21.0], desc: "Atak terrorystyczny", type: MarkTypes.Terrorist, icon: terroristIcon },
  { coords: [52.21, 21.02], desc: "Pożar", type: MarkTypes.Fire, icon: fireIcon },
  { coords: [52.12, 21.05], desc: "Karetka", type: MarkTypes.Ambulance, icon: ambulanceIcon },
  { coords: [52.32, 21.00], desc: "Alert", type: MarkTypes.Alert, icon: alertIcon },
  { coords: [52.12, 21.23], desc: "Zdarzenie 2", type: MarkTypes.Incident, icon: accidentIcon },
  { coords: [52.22, 20.87], desc: "Karetka 2", type: MarkTypes.Ambulance, icon: ambulanceIcon },
  { coords: [52.26, 19.98], desc: "Ognisko Covid", type: MarkTypes.Covid, icon: covidIcon }
];

interface MapFormParams {
  filters: MarkTypes,
  setFilters: (x: MarkTypes) => void
}

const MapForm = (props: Readonly<MapFormParams>) => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1 className="mt-3">{t("Map.Map")}</h1>
      <h3 className="mb-3">{t("Map.Filters")}:</h3>
      <Form className="w-50">
        <FormCheck label={t("MainPage.Incidents")} value={props.filters & MarkTypes.Incident} onChange={e => props.setFilters(props.filters ^ MarkTypes.Incident)} icon={accidentIcon} />
        <FormCheck label={t("Reports.TerroristAttacks")} value={props.filters & MarkTypes.Terrorist} onChange={e => props.setFilters(props.filters ^ MarkTypes.Terrorist)} icon={terroristIcon} />
        <FormCheck label={t("Reports.Fires")} value={props.filters & MarkTypes.Fire} onChange={e => props.setFilters(props.filters ^ MarkTypes.Fire)} icon={fireIcon} />
        <FormCheck label={t("Ambulance.Ambulances")} value={props.filters & MarkTypes.Ambulance} onChange={e => props.setFilters(props.filters ^ MarkTypes.Ambulance)} icon={ambulanceIcon} />
        <FormCheck label={t("Reports.Hospitals")} value={props.filters & MarkTypes.Hospital} onChange={e => props.setFilters(props.filters ^ MarkTypes.Hospital)} icon={hospitalIcon} />
        <FormCheck label={t("Reports.Polices")} value={props.filters & MarkTypes.Police} onChange={e => props.setFilters(props.filters ^ MarkTypes.Police)} icon={policeIcon} />
        <FormCheck label={t("Alert")} value={props.filters & MarkTypes.Alert} onChange={e => props.setFilters(props.filters ^ MarkTypes.Alert)} icon={alertIcon} />
        <FormCheck label={t("Reports.CovidOutbreaks")} value={props.filters & MarkTypes.Covid} onChange={e => props.setFilters(props.filters ^ MarkTypes.Covid)} icon={covidIcon} />
      </Form>
    </Container>
  );
};

const MainMap = () => {
  //const [dynamic, setDynamic] = useState<Mark[]>([]);
  const [facilities, setFacilities] = useState<Mark[]>([]);
  const [filters, setFilters] = useState(255);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setUpdate(!update), 15000);

    return () => {
      clearTimeout(timeout);
    };
  }, [update]);

  useEffect(() => {
    getFacilities().then(res => res.json()).then((data: FacilityResponse[]) => {
      if (data) {
        setFacilities(data.map(e => ({
          coords: [e.location.latitude, e.location.longitude],
          desc: e.name,
          type: e.facilityType.toLowerCase().includes("h") ? MarkTypes.Hospital : MarkTypes.Police,
          icon: e.facilityType.toLowerCase().includes("h") ? hospitalIcon : policeIcon
        })));
      }
    }).catch(console.error);
  }, []);

  const marks = [...positions, ...facilities].filter(p => p.type & filters).map((e: any) => {
    return {
      coords: e.coords,
      desc: e.desc,
      icon: e.icon,
      to: e.to
    };
  });

  return <MapView center={[52.222, 21.015]} initialZoom={10} element={<MapForm filters={filters} setFilters={setFilters} />} marks={marks} />;
};

export default MainMap;
