import FormControl from "../../fragments/forms/FormControl";
import { useState } from "react";
import { ambulanceIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const MapForm = (props: {val: number, call: (x: number) => void}) => {
  return (
    <FormControl type="range" minValue={0} maxValue={2} value={props.val} onChange={e => props.call(parseFloat(e.target.value))} />
  );
};

const TestMap = () => {
  const [coords] = useState<[number, number]>([52.222, 21.015]);
  const [progress, setProgress] = useState(0);
  const points: [number, number][] = [[52.222, 21.015], [51, 21], [50, 22]];

  const mark = {
    coords: points[progress],
    desc: "Karetka",
    icon: ambulanceIcon
  };

  return <MapView isLoaded center={coords} initialZoom={12} element={<MapForm val={progress} call={setProgress} />} marks={[mark]} paths={[{points: points, color: "blue"}]} />;
};

export default TestMap;
