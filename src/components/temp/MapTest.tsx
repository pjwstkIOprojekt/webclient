import L from "leaflet";
import { Position } from "../fragments/Map";
import { useState, useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";
import FormCheck from "../fragments/FormCheck";
import MapView from "../fragments/MapView";

const accidentIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const ambulanceIcon = L.icon({
  iconSize: [15, 21],
  iconAnchor: [5, 21],
  popupAnchor: [1, 0],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const positions: Position[] = [
  { coords: [52.22, 21.01], desc: "Zdarzenie 1", icon: accidentIcon },
  { coords: [52.23, 21.0], desc: "Zdarzenie 2", icon: accidentIcon },
  { coords: [52.21, 21.02], desc: "Zdarzenie 3", icon: accidentIcon },
  { coords: [52.12, 21.05], desc: "Karetka 1", icon: ambulanceIcon },
  { coords: [52.02, 20.99], desc: "Karetka 2", icon: ambulanceIcon },
  { coords: [52.32, 21.00], desc: "Karetka 3", icon: ambulanceIcon }
];

const MapForm = (props: {func?: (set: any) => void}) => {
  const [showAccidents, toggleAccidents] = useState(true);
  const [showAmbulances, toggleAmbulances] = useState(true);
  const [showFacilities, toggleFacilities] = useState(true);

  useEffect(() => {
    if (!props.func) {
      return;
    }

    props.func(positions.filter(p => {
      if (p.icon === accidentIcon) {
        return showAccidents;
      }

      if (p.icon === ambulanceIcon) {
        return showAmbulances;
      }

      return showFacilities;
    }));
  }, [props.func, showAccidents, showAmbulances, showFacilities]);

  return (
    <Container>
      <h1 className="text-center mt-3">Przegląd mapy</h1>
      <Form>
        <Row className="justify-content-center mb-3">
          <FormCheck label="Pokaż zdarzenia" value={showAccidents} onChange={e => toggleAccidents(!showAccidents)} />
          <FormCheck label="Pokaż karetki" value={showAmbulances} onChange={e => toggleAmbulances(!showAmbulances)} />
          <FormCheck label="Pokaż placówki" value={showFacilities} onChange={e => toggleFacilities(!showFacilities)} />
        </Row>
      </Form>
    </Container>
  );
};

const MapTest = () => {
  const [marks, setMarks] = useState(positions);
  return <MapView center={[52.222, 21.015]} initialZoom={12} searchable marks={marks} element={<MapForm func={setMarks} />} clickable onClick={e => console.log(e)} />;
};

export default MapTest;
