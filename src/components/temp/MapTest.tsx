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
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/1504px-Map_pin_icon.svg.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const ambulanceIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const facilityIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/1200px-Map_pin_icon_green.svg.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const positions: Position[] = [
  { coords: [52.22, 21.01], desc: "Zdarzenie 1", icon: accidentIcon },
  { coords: [52.23, 21.0], desc: "Zdarzenie 2", icon: accidentIcon },
  { coords: [52.21, 21.02], desc: "Zdarzenie 3", icon: accidentIcon },
  { coords: [52.12, 21.05], desc: "Karetka 1", icon: ambulanceIcon },
  { coords: [52.02, 20.99], desc: "Karetka 2", icon: ambulanceIcon },
  { coords: [52.32, 21.00], desc: "Karetka 3", icon: ambulanceIcon },
  { coords: [52.32, 21.00], desc: "Placówka 1", icon: facilityIcon },
  { coords: [52.12, 21.23], desc: "Placówka 2", icon: facilityIcon },
  { coords: [52.22, 20.87], desc: "Placówka 3", icon: facilityIcon }
];

const MapForm = (props: {func?: (set: any) => void}) => {
  const [showAccidents, toggleAccidents] = useState(true);
  const [showAmbulances, toggleAmbulances] = useState(true);
  const [showFacilities, toggleFacilities] = useState(true);
  const func = props.func;

  useEffect(() => {
    if (!func) {
      return;
    }

    func(positions.filter(p => {
      if (p.icon === accidentIcon) {
        return showAccidents;
      }

      if (p.icon === ambulanceIcon) {
        return showAmbulances;
      }

      return showFacilities;
    }));
  }, [showAccidents, showAmbulances, showFacilities, func]);

  return (
    <Container>
      <h1 className="text-center mt-3">Przegląd mapy</h1>
      <Form>
        <Row className="justify-content-center mb-3">
          <FormCheck label="Zdarzenia" value={showAccidents} onChange={e => toggleAccidents(!showAccidents)} />
          <FormCheck label="Karetki" value={showAmbulances} onChange={e => toggleAmbulances(!showAmbulances)} />
          <FormCheck label="Placówki" value={showFacilities} onChange={e => toggleFacilities(!showFacilities)} />
        </Row>
      </Form>
    </Container>
  );
};

const MapTest = () => {
  const [marks, setMarks] = useState(positions);
  return <MapView center={[52.222, 21.015]} initialZoom={10} searchable marks={marks} element={<MapForm func={setMarks} />} clickable onClick={e => console.log(e)} />;
};

export default MapTest;
