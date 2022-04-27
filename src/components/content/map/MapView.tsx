import { Container } from "react-bootstrap";
import Map from "../../fragments/Map";

const MapView = () => {
  return (
    <Container>
      <h1 className="my-3">Mapa</h1>
      <Map center={[52.222, 21.015]} initialZoom={12} />
    </Container>
  );
};

export default MapView;
