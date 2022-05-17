import { useState, FormEvent } from "react";
import { createReport } from "../../../apiCalls/accidentReportCalls";
import { Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import FormTextArea from "../../fragments/FormTextArea";
import AdditionalHelp from "../additionalHelp/AdditionalHelp";
import Button from "../../fragments/Button";

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

const CreateReport = () => {
  const [type, setType] = useState(4);
  const [state, setState] = useState(0);
  const [rating, setRating] = useState(1);
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createReport({
      dangerRating: rating,
      date: new Date(Date.now()),
      closed: false,
      reportSurvey: {
        victimBreathing: state < 2,
        victimConsious: state === 0,
        description: desc,
        date: new Date(Date.now())
      }
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center mt-3">Nowe zgłoszenie</h1>
      <Row className="justify-content-center mb-3">
        <FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} label="Rodzaj zdarzenia:" options={accidentTypes} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormSelect id="state" onChange={e => setState(parseInt(e.target.value))} value={state} label="Stan ofiary" options={victimStates} />
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

export default CreateReport;
