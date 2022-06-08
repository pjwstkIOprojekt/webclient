import { useState, FormEvent } from "react";
import { createEmergency } from "../../../apiCalls/emergencyCalls";
import { Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import FormCheck from "../../fragments/forms/FormCheck";
import FormTextArea from "../../fragments/forms/FormTextArea";
import AdditionalHelp from "./AdditionalHelp";
import Button from "../../fragments/util/Button";
import MapView from "../../fragments/map/MapView";

const accidentTypes = [
  "Atak terrorystyczny",
  "Protest",
  "Powódź",
  "Pożar",
  "Wypadek samochodowy"
];

const victimStates = [
  "Przytomna",
  "Nieprzytomna",
  "Nieoddychająca"
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
        <FormTextArea id="description" onChange={e => setDesc(e.target.value)} value={desc} label="Opis sytuacji:" />
      </Row>
      <Row>
        <AdditionalHelp />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit" text="Zgłoś zdarzenie" />
      </Row>
    </Form>
  );
};

const CreateReport = () => {
  return <MapView center={[52.222, 21.015]} initialZoom={12} element={<ReportForm />} />;
};

export default CreateReport;
