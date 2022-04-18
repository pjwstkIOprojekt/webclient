import { Container } from "react-bootstrap";
import Map from "./Map";

const MapView = () => {
  return (
    <Container>
      <h1 className="my-3">Mapa</h1>
      <Map />
    </Container>
  );
};

export default MapView;
