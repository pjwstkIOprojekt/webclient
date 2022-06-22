import { useState, FormEvent } from "react";
import { createEmergency } from "../../../apiCalls/emergencyCalls";
import { Form, Row, Col } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import FormCheck from "../../fragments/forms/FormCheck";
import FormControl from "../../fragments/forms/FormControl";
import FormTextArea from "../../fragments/forms/FormTextArea";
import Button from "../../fragments/util/Button";
import L from "leaflet";
import { Position } from "../../fragments/map/Map";
import MapView from "../../fragments/map/MapView";

const accidentTypes = [
  "Atak terrorystyczny",
  "Protest",
  "Powódź",
  "Pożar",
  "Wypadek samochodowy"
];

const dangerLevels = [
  "1 - Nic wielkiego",
  "2 - Trochę groźnie",
  "3 - Duże zagrożenie",
  "4 - Ludzie umierają",
  "5 - Koniec świata"
];

const ReportForm = () => {
  const [type, setType] = useState(4);
  const [breathing, setBreathing] = useState(true);
  const [conscious, setConscious] = useState(true);
  const [rating, setRating] = useState(1);
  const [amountVictims, setAmountVictims] = useState(0);
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createEmergency({
      description: desc,
      breathing: breathing,
      conscious: conscious,
      bloodType: 0
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center mt-3">Nowe zgłoszenie</h1>
      <Row className="justify-content-center mb-3">
        <FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} label="Rodzaj zdarzenia:" options={accidentTypes} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="breat" onChange={e => setBreathing(!breathing)} value={breathing} label="Czy ofiara oddycha?" />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="cons" onChange={e => setConscious(!conscious)} value={conscious} label="Czy ofiara jest przytomna?" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormSelect id="dangerRating" onChange={e => setRating(parseInt(e.target.value))} value={rating} label="Skala zagrożenia" options={dangerLevels} />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="amountVictims" onChange={e => setAmountVictims(parseInt(e.target.value))} value={amountVictims} label="Ilość poszkodowanych" type="number" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormTextArea id="description" onChange={e => setDesc(e.target.value)} value={desc} label="Opis sytuacji:" />
      </Row>
      <h3 className="text-center mt-3">Wezwij dodatkowe służby</h3>
      <Row className="justify-content-center mb-3 ml-2">
        <Col>
          <FormCheck label="Policja" />
        </Col>
        <Col>
          <FormCheck label="Straż pożarna" />
        </Col>
        <Col>
          <FormCheck label="Straż miejska" />
        </Col>
        <Col>
          <FormCheck label="Wojsko" />
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit">Zgłoś zdarzenie</Button>
      </Row>
    </Form>
  );
};

const accidentIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/1504px-Map_pin_icon.svg.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const CreateReport = () => {
  const [mark, setMark] = useState<Position | null>(null);

  const onUpdate = (e: L.LatLng) => {
    if (!mark) {
      setMark({
        coords: [e.lat, e.lng],
        desc: "Miejsce zdarzenia",
        icon: accidentIcon
      });

      return;
    }

    const tmp = { ...mark };
    tmp.coords = [e.lat, e.lng];
    setMark(tmp);
  };

  return <MapView center={[52.222, 21.015]} initialZoom={12} element={<ReportForm />} searchable clickable onClick={e => onUpdate(e)} onSearch={e => onUpdate(e.geocode.center)} marks={mark ? [mark] : []} />;
};

export default CreateReport;
