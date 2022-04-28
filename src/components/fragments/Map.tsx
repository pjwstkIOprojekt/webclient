import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export interface Position {
  coords: [number, number],
  desc?: string
}

export interface MapParams {
  center: [number, number],
  initialZoom: number,
  marks?: Position[]
}

const Map = (props: Readonly<MapParams>) => {
  let count = 0;

  return (
    <MapContainer center={props.center} zoom={props.initialZoom}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.marks ? props.marks.map(pos => (
        <Marker key={count++} position={pos.coords}>
          {pos.desc ? <Popup>{pos.desc}</Popup> : ""}
        </Marker>
      )) : ""}
    </MapContainer>
  );
};

export default Map;
