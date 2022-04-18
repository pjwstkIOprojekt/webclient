import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer center={[52.222, 21.015]} zoom={12}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[52.19864, 20.99827]}>
        <Popup>Szpital MSWiA</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;