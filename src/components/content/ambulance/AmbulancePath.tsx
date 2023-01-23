import { MapDataHelperParams } from "../sharedViewsParams";
import { PathElement } from "../../../api/sharedTypes";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAmbulancePath, AmbulancePathResponse, getAmbulanceIncidents } from "../../../api/ambulanceCalls";
import { licensePlateError, missingDataError, loadingError } from "../sharedStrings";
import Form from "../../fragments/forms/Form";
import FormSelect from "../../fragments/forms/FormSelect";
import Range from "../../fragments/forms/Range";
import Number from "../../fragments/forms/api/Number";
import Error from "../../fragments/forms/Error";
import { ambulanceIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

import { getDispatchers } from "../../../api/employeeCalls";
// Displays ambulance path during selected incident response
const AmbulancePathView = (props: Readonly<MapDataHelperParams<[number, number][]>>) => {
  const [ori, setOri] = useState<PathElement[]>([]);
  const [day, setDay] = useState(0);
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

    const abort = new AbortController();

    getAmbulancePath(ambulanceId, abort).then(res => res.json()).then((data: AmbulancePathResponse) => {
      if (data.path) {
        setOri(data.path.map(p => ({
          ...p,
          timestamp: new Date(p.timestamp)
        })));

        const from = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
        const to = new Date();
        setPath(data.path.filter(p => p.timestamp >= from && p.timestamp <= to).map(p => [p.latitude, p.longitude] as [number, number]));
      } else {
        setError(missingDataError);
      }
    }).catch(err => {
      if (abort.signal.aborted) {
        return;
      }

      console.error(err);
      setError(loadingError);
    });

    return () => abort.abort();
  }, [ambulanceId, setPath]);

  const onMove = (x: number) => {
    setOffset(x);
    const value = props.data[x];

    if (value && props.update) {
      props.update(value);
    }
  };

  const changeDay = (x: number) => {
    setDay(x);
    const from = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * (day + 1));
    const to = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * day);
    setPath(ori.filter(p => p.timestamp >= from && p.timestamp <= to).map(p => [p.latitude, p.longitude] as [number, number]));
    onMove(0);
  };

  return (
    <Form>
      <h1 className="my-3 text-center">{t("Ambulance.Path")}</h1>
      <FormSelect id="timeSpan" className="mb-3" value={day.toString()} options={["0", "1", "2", "3"]} onChange={e => changeDay(parseInt(e.target.value))} />
      <Range id="timeline" className="mb-3" minValue="0" maxValue={props.data.length - 1} value={offset} onChange={e => onMove(parseInt(e.target.value))} />
      <h4 className="text-center mb-3">{t("Map.Location")}</h4>
      <Number id="latitude" className="mb-3" value={props.lat} disabled />
      <Number id="longitude" className="mb-3" value={props.lng} disabled />
      <Error className="mt-3" error={error} />
    </Form>
  );
};

// Mini-map wrapper for ambulance path view
const AmbulancePath = () => {
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [loaded, setLoaded] = useState(false);
  const [path, setPath] = useState<[number, number][]>([]);
  const { t } = useTranslation();
  const { ambulanceId } = useParams();

  useEffect(() => navigator.geolocation.getCurrentPosition(pos => {
    setCoords([pos.coords.latitude, pos.coords.longitude]);
    setLoaded(true);
  }, err => setLoaded(true)), []);

  useEffect(() => {
    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }

    const abort = new AbortController();

    getAmbulanceIncidents(ambulanceId, abort).then(res => res.json()).then(data => console.log(data)).catch(console.error);
    getDispatchers(abort).then(res => res.json()).then(data => console.log(data)).catch(console.error);

    return () => abort.abort();
  }, [ambulanceId]);

  const mark = {
    coords: coords,
    desc: t("Ambulance.Ambulance"),
    icon: ambulanceIcon
  };

  return <MapView isLoaded={loaded} center={coords} initialZoom={12} small element={<AmbulancePathView update={setCoords} lat={coords[0]} lng={coords[1]} data={path} setData={setPath} />} paths={[{
    points: path,
    color: "red"
  }]} marks={[mark]} />;
};

export default AmbulancePath;
