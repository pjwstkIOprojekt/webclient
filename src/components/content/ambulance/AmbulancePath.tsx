import { MapDataHelperParams } from "../sharedViewsParams";
import { PathElement } from "../../../api/basicCalls";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAmbulancePath, AmbulancePathResponse, postAmbulanceLocation } from "../../../api/ambulanceCalls";
import { licensePlateError, loadingError, unknownError, errorHeader } from "../sharedStrings";
import { Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Range from "../../fragments/forms/Range";
import Number from "../../fragments/forms/api/Number";
import Button from "../../fragments/util/Button";
import L from "leaflet";
import { ambulanceIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

import FormSelect from "../../fragments/forms/FormSelect";

const AmbulancePathView = (props: Readonly<MapDataHelperParams<PathElement[]>>) => {
  const [offset, setOffset] = useState(0);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState("");
  const { ambulanceId } = useParams();
  const { t } = useTranslation();
  const setPath = props.setData;

  useEffect(() => {
    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }

    getAmbulancePath(ambulanceId).then(res => res.json()).then((data: AmbulancePathResponse) => {
      if (data.path) {
        setPath(data.path);
      } else {
        setError(loadingError);
      }
    }).catch(err => {
      console.error(err);
      setError(loadingError);
    });
  }, [ambulanceId, setPath, update]);

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
        setUpdate(!update);
      } else {
        console.log(res);
        setError(unknownError);
      }
    }).catch(err => {
      console.error(err);
      setError(unknownError);
    });
  };

  const onMove = (x: number) => {
    setOffset(x);
    const value = props.data[x];
    props.update([value.latitude, value.longitude]);
  };

  return (
    <Form onSubmit={onSubmit} className="w-50">
      <h1 className="my-3 text-center">{t("Ambulance.Path")}</h1>
      <FormSelect className="my-3" options={["--Wybierz trasę--"]} />
      <Range id="timeline" className="mb-3" minValue="0" maxValue={props.data.length - 1} value={offset} onChange={e => onMove(parseInt(e.target.value))} />
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
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [loaded, setLoaded] = useState(false);
  const [path, setPath] = useState<PathElement[]>([]);
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

  return <MapView isLoaded={loaded} center={coords} initialZoom={12} small element={<AmbulancePathView update={setCoords} lat={coords[0]} lng={coords[1]} data={path} setData={setPath} />} paths={[{
    points: path.map(p => [p.latitude, p.longitude]),
    color: "red"
  }]} clickable onClick={e => update(e)} marks={[mark]} />;
};

export default AmbulancePath;
