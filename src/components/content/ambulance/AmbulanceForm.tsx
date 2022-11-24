import { MapViewHelperParams } from "../sharedViewsParams";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAmbulanceByLicensePlate, AmbulanceResponse, createAmbulance, updateAmbulance, postAmbulanceLocation } from "../../../api/ambulanceCalls";
import { loadingError, unknownError, errorHeader } from "../sharedStrings";
import { Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Length from "../../fragments/forms/api/Length";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { AmbulanceClass, AmbulanceType } from "../../../api/enumCalls";
import Number from "../../fragments/forms/api/Number";
import Button from "../../fragments/util/Button";
import L from "leaflet";
import { ambulanceIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const AmbulanceFormView = (props: Readonly<MapViewHelperParams>) => {
  const [licensePlate, setLicensePlate] = useState("");
  const [ambulanceClass, setAmbulanceClass] = useState("");
  const [ambulanceType, setAmbulanceType] = useState("");
  const [seats, setSeats] = useState(1)
  const [error, setError] = useState("");
  const { ambulanceId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (ambulanceId !== undefined) {
      getAmbulanceByLicensePlate(ambulanceId).then(res => res.json()).then((data: AmbulanceResponse) => {
        if (data.ambulanceClass && data.ambulanceType) {
          setLicensePlate(data.licensePlate);
          setAmbulanceClass(data.ambulanceClass);
          setAmbulanceType(data.ambulanceType);
        } else {
          setError(loadingError);
        }
      }).catch(err => {
        console.error(err);
        setError(loadingError);
      });
    }
  }, [ambulanceId]);

  const onSubmit = () => {
    setError("");
    const lng = props.lng;
    const lat = props.lat;

    const ambulance = {
      licensePlate: licensePlate,
      ambulanceClass: ambulanceClass,
      ambulanceType: ambulanceType,
      seats: seats,
      longitude: lng,
      latitude: lat
    };

    (ambulanceId === undefined ? createAmbulance(ambulance) : updateAmbulance(ambulance)).then(res => {
      if (res.status === 200) {
        if (ambulanceId === undefined) {
          navigate("../ambulances");
        } else {
          postAmbulanceLocation(ambulanceId, {
            longitude: lng,
            latitude: lat
          }).then(res => {
            if (res.status === 200) {
              navigate("../ambulances");
            } else {
              console.log(res);
              setError(unknownError);
            }
          }).catch(err => {
            console.error(err);
            setError(unknownError);
          });
        }
      } else if (res.status === 409) {
        setError("Ambulance.Exists");
      } else {
        console.log(res);
        setError(unknownError);
      }
    }).catch(err => {
      console.error(err);
      setError(unknownError);
    });
  };

  return (
    <Form onSubmit={onSubmit} className="w-50">
      <h1 className="my-3 text-center">{ambulanceId === undefined ? t("Ambulance.Adding") : t("Ambulance.Editing")}</h1>
      <Length length={8} id="licensePlate" className="mb-3" label={t("Ambulance.LicensePlate")} required value={licensePlate} onChange={e => setLicensePlate(e.target.value)} disabled={ambulanceId !== undefined} />
      <EnumSelect id="ambulanceClass" className="mb-3" label={t("Ambulance.Class")} required enum={AmbulanceClass} value={ambulanceClass} onLoad={setAmbulanceClass} onChange={e => setAmbulanceClass(e.target.value)} />
      <EnumSelect id="ambulanceType" className="mb-3" label={t("Ambulance.Type")} required enum={AmbulanceType} value={ambulanceType} onLoad={setAmbulanceType} onChange={e => setAmbulanceType(e.target.value)} />
      <Number id="seats" className="mb-3" label={t("Ambulance.Seats")} required value={seats} minValue="1" onChange={e => setSeats(parseInt(e.target.value))} />
      <h4 className="text-center mb-3">{t("Map.Location")}</h4>
      <Number id="latitude" className="mb-3" required value={props.lat} onChange={e => props.update([parseFloat(e.target.value), props.lng])} />
      <Number id="longitude" className="mb-3" required value={props.lng} onChange={e => props.update([props.lat, parseFloat(e.target.value)])} />
      <Row className="justify-content-center">
        <Button className="mt-3 w-75" type="submit">{ambulanceId === undefined ? t("Ambulance.Add") : t("Common.SaveChanges")}</Button>
      </Row>
      {error ? (
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>{t(errorHeader)}</Alert.Heading>
          <p>{t(error)}</p>
        </Alert>
      ) : ""}
    </Form>
  );
};

const AmbulanceForm = () => {
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => navigator.geolocation.getCurrentPosition(pos => {
    setCoords([pos.coords.latitude, pos.coords.longitude]);
    setLoaded(true);
  }, err => setLoaded(true)), []);

  const update = (x: Readonly<L.LatLng>) => setCoords([x.lat, x.lng]);

  const mark = {
    coords: coords,
    desc: t("Ambulance.Ambulance"),
    icon: ambulanceIcon
  };

  return <MapView isLoaded={loaded} center={coords} initialZoom={12} element={<AmbulanceFormView update={setCoords} lat={coords[0]} lng={coords[1]} />} clickable onClick={e => update(e)} marks={[mark]} />;
};

export default AmbulanceForm;
