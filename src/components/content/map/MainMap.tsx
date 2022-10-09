import { useState, useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";
import FormCheck from "../../fragments/forms/FormCheck";
import L from "leaflet";
import MapView from "../../fragments/map/MapView";

const positions = [
  { coords: [52.22, 21.01], desc: "Zdarzenie 1", type: null },
  { coords: [52.23, 21.0], desc: "Zdarzenie 2", type: null },
  { coords: [52.21, 21.02], desc: "Zdarzenie 3", type: null },
  { coords: [52.12, 21.05], desc: "Karetka 1", type: true },
  { coords: [52.02, 20.99], desc: "Karetka 2", type: true },
  { coords: [52.32, 21.00], desc: "Karetka 3", type: true },
  { coords: [52.32, 21.00], desc: "Placówka 1", type: false },
  { coords: [52.12, 21.23], desc: "Placówka 2", type: false },
  { coords: [52.22, 20.87], desc: "Placówka 3", type: false }
];

const MapForm = (props: {func?: (set: any) => void}) => {
  const [showAccidents, toggleAccidents] = useState(true);
  const [showAmbulances, toggleAmbulances] = useState(true);
  const [showFacilities, toggleFacilities] = useState(true);
  const func = props.func;
  /*
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
  }, [showAccidents, showAmbulances, showFacilities, func]);*/

  return (
    <Container>
      <h1 className="text-center mt-3">Mapa</h1>
      <Form>
        <Row className="justify-content-center mb-3">
          <h3>Filtry:</h3>
          <FormCheck label="Zdarzenia" value={showAccidents} onChange={e => toggleAccidents(!showAccidents)} />
          <FormCheck label="Karetki" value={showAmbulances} onChange={e => toggleAmbulances(!showAmbulances)} />
          <FormCheck label="Placówki" value={showFacilities} onChange={e => toggleFacilities(!showFacilities)} />
        </Row>
      </Form>
    </Container>
  );
};

const MainMap = () => {
  const [accidents, setAccidents] = useState([]);
  const [ambulances, setAmbulances] = useState([]);
  const [facilities, setFacilities] = useState([]);

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

  const marks = [...positions].map((e: any) => {
    return {
      coords: e.coords,
      desc: e.desc,
      icon: e.type === null ? accidentIcon : (e.type === true ? ambulanceIcon : facilityIcon)
    };
  });

  return <MapView center={[52.222, 21.015]} initialZoom={10} element={<MapForm func={e => null} />} marks={marks} />;
};

export default MainMap;
