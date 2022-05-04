import { useState } from "react";
import FormControl from "../fragments/FormControl";
import Button from "../fragments/Button";
import MapView from "../fragments/MapView";

const Form = (props: any) => {
  const [txt, setTxt] = useState("");

  const search = () => {

  };

  return <><FormControl value={txt} onChange={e => setTxt(e.target.value)} placeholder="Szukaj" /><Button onClick={search} text="Szukaj" /></>;
};

const MapTest = () => {
  const [point, setPoint] = useState<[number, number]>([52.222, 21.015]);

  return (
    <MapView center={point} initialZoom={12} element={<Form func={(x: any) => setPoint(x)} />} marks={[{coords: point}]} />
  );
};

export default MapTest;
