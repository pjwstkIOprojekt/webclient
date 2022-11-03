import FormControl from "../../fragments/forms/FormControl";
import { useState, useEffect } from "react";
import { accidentIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const MapForm = (props: {val: number, call: (x: number) => void}) => {
  return (
    <FormControl type="range" minValue={0} maxValue={100} value={props.val} onChange={e => props.call(parseFloat(e.target.value))} />
  );
};

const TestMap = () => {
  const [coords, setCoords] = useState<[number, number]>([52.222, 21.015]);
  const [progress, setProgress] = useState(100);
  useEffect(() => navigator.geolocation.getCurrentPosition(pos => setCoords([pos.coords.latitude, pos.coords.longitude])), []);

  const mark = {
    coords: [coords[0] + (-1.222 * progress * 0.01), coords[1] + (0.15 * progress * 0.01)] as [number, number],
    desc: "Miejsce zdarzenia",
    icon: accidentIcon
  };

  return <MapView center={coords} initialZoom={12} element={<MapForm val={progress} call={setProgress} />} marks={[mark]} paths={[{points: [coords, [51, 21], [50, 22]], color: "blue"}]} />;
};

export default TestMap;
