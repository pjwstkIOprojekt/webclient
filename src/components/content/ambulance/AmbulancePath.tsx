import { MapDataHelperParams } from "../sharedViewsParams";
import { PathElement } from "../../../api/basicCalls";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAmbulancePath, AmbulancePathResponse } from "../../../api/ambulanceCalls";
import { licensePlateError, missingDataError, loadingError } from "../sharedStrings";
import Form from "../../fragments/forms/Form";
import Range from "../../fragments/forms/Range";
import Number from "../../fragments/forms/api/Number";
import Error from "../../fragments/forms/Error";
import { ambulanceIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const AmbulancePathView = (props: Readonly<MapDataHelperParams<PathElement[]>>) => {
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState("");
  const { ambulanceId } = useParams();
  const { t } = useTranslation();
  const setPath = props.setData;

  useEffect(() => {
    setError("");

    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }

    getAmbulancePath(ambulanceId).then(res => res.json()).then((data: AmbulancePathResponse) => {
      if (data.path) {
        setPath(data.path);
      } else {
        setError(missingDataError);
      }
    }).catch(err => {
      console.error(err);
      setError(loadingError);
    });
  }, [ambulanceId, setPath]);

  const onMove = (x: number) => {
    setOffset(x);
    const value = props.data[x];
    props.update([value.latitude, value.longitude]);
  };

  return (
    <Form>
      <h1 className="my-3 text-center">{t("Ambulance.Path")}</h1>
      <Range id="timeline" className="mb-3" minValue="0" maxValue={props.data.length - 1} value={offset} onChange={e => onMove(parseInt(e.target.value))} />
      <h4 className="text-center mb-3">{t("Map.Location")}</h4>
      <Number id="latitude" className="mb-3" value={props.lat} disabled />
      <Number id="longitude" className="mb-3" value={props.lng} disabled />
      <Error className="mt-3" error={error} />
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

  const mark = {
    coords: coords,
    desc: t("Ambulance.Ambulance"),
    icon: ambulanceIcon
  };

  return <MapView isLoaded={loaded} center={coords} initialZoom={12} small element={<AmbulancePathView update={setCoords} lat={coords[0]} lng={coords[1]} data={path} setData={setPath} />} paths={[{
    points: path.map(p => [p.latitude, p.longitude]),
    color: "red"
  }]} marks={[mark]} />;
};

export default AmbulancePath;
