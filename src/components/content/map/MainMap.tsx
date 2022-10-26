import { Container, Form } from "react-bootstrap";
import FormCheck from "../../fragments/forms/FormCheck";
import { useState, useEffect } from "react";
import L from "leaflet";
import MapView from "../../fragments/map/MapView";

enum MarkTypes {
  None = 0,
  Incident = 1,
  Terrorist = 2,
  Fire = 4,
  Ambulance = 8,
  Hospital = 16,
  Police = 32,
  Alert = 64,
  Covid = 128
}

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
  iconUrl: "https://cdn-icons-png.flaticon.com/512/8/8115.png?w=826&t=st=1666208765~exp=1666209365~hmac=e2449742142cbe00032697d49c7d236b48769e71bb872561825ba786688ddfc3",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const terroristIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://freesvg.org/img/Map-Warning-Icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const fireIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://cdn3.iconfinder.com/data/icons/map-markers-2-1/512/danger-512.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const alertIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://cdn2.iconfinder.com/data/icons/danger-problems-2/512/xxx013-512.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const policeIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-20-512.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const covidIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://img.icons8.com/cotton/344/coronavirus-hospital-map-pin--v2.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const positions = [
  { coords: [52.22, 21.01], desc: "Zdarzenie", type: MarkTypes.Incident, icon: accidentIcon },
  { coords: [52.23, 21.0], desc: "Atak terrorystyczny", type: MarkTypes.Terrorist, icon: terroristIcon },
  { coords: [52.21, 21.02], desc: "Pożar", type: MarkTypes.Fire, icon: fireIcon },
  { coords: [52.12, 21.05], desc: "Karetka", type: MarkTypes.Ambulance, icon: ambulanceIcon },
  { coords: [52.02, 20.99], desc: "Szpital", type: MarkTypes.Hospital, icon: facilityIcon },
  { coords: [52.32, 21.00], desc: "Posterunek policji", type: MarkTypes.Police, icon: policeIcon },
  { coords: [52.32, 21.00], desc: "Alert", type: MarkTypes.Alert, icon: alertIcon },
  { coords: [52.12, 21.23], desc: "Zdarzenie 2", type: MarkTypes.Incident, icon: accidentIcon },
  { coords: [52.22, 20.87], desc: "Karetka 2", type: MarkTypes.Ambulance, icon: ambulanceIcon },
  { coords: [52.26, 19.98], desc: "Ognisko Covid", type: MarkTypes.Covid, icon: covidIcon }
];

interface MapFormParams {
  filters: MarkTypes,
  setFilters: (x: MarkTypes) => void
}

const MapForm = (props: Readonly<MapFormParams>) => {
  return (
    <Container>
      <h1 className="mt-3">Mapa</h1>
      <h3 className="mb-3">Filtry (pokaż):</h3>
      <Form>
        <FormCheck label="Zdarzenia" value={props.filters & MarkTypes.Incident} onChange={e => props.setFilters(props.filters ^ MarkTypes.Incident)} />
        <FormCheck label="Ataki terrorystyczne" value={props.filters & MarkTypes.Terrorist} onChange={e => props.setFilters(props.filters ^ MarkTypes.Terrorist)} />
        <FormCheck label="Pożary" value={props.filters & MarkTypes.Fire} onChange={e => props.setFilters(props.filters ^ MarkTypes.Fire)} />
        <FormCheck label="Karetki" value={props.filters & MarkTypes.Ambulance} onChange={e => props.setFilters(props.filters ^ MarkTypes.Ambulance)} />
        <FormCheck label="Szpitale" value={props.filters & MarkTypes.Hospital} onChange={e => props.setFilters(props.filters ^ MarkTypes.Hospital)} />
        <FormCheck label="Posterunki policji" value={props.filters & MarkTypes.Police} onChange={e => props.setFilters(props.filters ^ MarkTypes.Police)} />
        <FormCheck label="Alerty" value={props.filters & MarkTypes.Alert} onChange={e => props.setFilters(props.filters ^ MarkTypes.Alert)} />
        <FormCheck label="Ognisko Covid" value={props.filters & MarkTypes.Covid} onChange={e => props.setFilters(props.filters ^ MarkTypes.Covid)} />
      </Form>
    </Container>
  );
};

const MainMap = () => {
  //const [accidents, setAccidents] = useState([]);
  //const [ambulances, setAmbulances] = useState([]);
  //const [facilities, setFacilities] = useState([]);
  const [filters, setFilters] = useState(7);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    console.log("Ambulances update");
    console.log("Emergencies update");
    const timeout = setTimeout(() => setUpdate(!update), 15000);

    return () => {
      clearTimeout(timeout);
    };
  }, [update]);

  useEffect(() => {
    console.log("Facilities update");
  }, []);

  const marks = [...positions].filter(p => p.type & filters).map((e: any) => {
    return {
      coords: e.coords,
      desc: e.desc,
      icon: e.icon
    };
  });

  return <MapView center={[52.222, 21.015]} initialZoom={10} element={<MapForm filters={filters} setFilters={setFilters} />} marks={marks} />;
};

export default MainMap;
