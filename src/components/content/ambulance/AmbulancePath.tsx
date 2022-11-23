import { MapViewHelperParams } from "../sharedViewsParams";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AmbulancePathResponse, getAmbulancePath, postAmbulanceLocation } from "../../../api/ambulanceCalls";
import { licensePlateError, loadingError, unknownError, errorHeader } from "../sharedStrings";
import { Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Number from "../../fragments/forms/api/Number";
import Button from "../../fragments/util/Button";
import L from "leaflet";
import { ambulanceIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const AmbulancePathView = (props: Readonly<MapViewHelperParams>) => {
  const [path, setPath] = useState<AmbulancePathResponse>({
    path: []
  });

  const [error, setError] = useState("");
  const { ambulanceId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }

    getAmbulancePath(ambulanceId).then(res => res.json()).then((data: AmbulancePathResponse) => {
      if (data.path) {
        setPath(data);
      } else {
        setError(loadingError);
      }
    }).catch(err => {
      console.error(err);
      setError(loadingError);
    });
  }, [ambulanceId]);

  const onSubmit = () => {
    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }

    setError("");

    postAmbulanceLocation(ambulanceId, {
      longitude: props.lng,
      latitude: props.lat
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
  };

  return (
    <Form onSubmit={onSubmit} className="w-50">
      <h1 className="my-3 text-center">{t("Ambulance.Editing")}</h1>
      <h4 className="text-center mb-3">{t("Map.Location")}</h4>
      <Number id="latitude" className="mb-3" required value={props.lat} onChange={e => props.update([parseFloat(e.target.value), props.lng])} />
      <Number id="longitude" className="mb-3" required value={props.lng} onChange={e => props.update([props.lat, parseFloat(e.target.value)])} />
      <Row className="justify-content-center">
        <Button className="mt-3 w-75" type="submit">{t("Common.SaveChanges")}</Button>
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

const AmbulancePath = () => {
  const [coords, setCoords] = useState<[number, number]>([52.222, 21.015]);
  const { t } = useTranslation();
  useEffect(() => navigator.geolocation.getCurrentPosition(pos => setCoords([pos.coords.latitude, pos.coords.longitude])), []);
  const update = (x: Readonly<L.LatLng>) => setCoords([x.lat, x.lng]);

  const mark = {
    coords: coords,
    desc: t("Ambulance.Ambulance"),
    icon: ambulanceIcon
  };

  return <MapView center={coords} initialZoom={12} element={<AmbulancePathView update={setCoords} lat={coords[0]} lng={coords[1]} />} clickable onClick={e => update(e)} marks={[mark]} />;
};

export default AmbulancePath;
