import { useState, FormEvent } from "react";
import { Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import FormControl from "../../fragments/FormControl";
import FormTextArea from "../../fragments/FormTextArea";
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

const ambulances = [
  "B - Covid",
  "A - Podstawowa",
  "B - Specjalistyczna",
  "C - Specjalistyczna",
  "B - Podstawowa"
];

const AssignAmbulance = () => {
  const [type, setType] = useState(3);
  const [state, setState] = useState(1);
  const [rating, setRating] = useState(5);
  const [desc, setDesc] = useState("Wypadek samochodowy, samochód płonie");
  const [ambulance, setAmbulance] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center mt-3">Przypisanie karetki</h1>
      <Row className="justify-content-center mb-3">
        <FormSelect id="type" disabled value={type} label="Rodzaj zdarzenia:" options={accidentTypes} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormSelect id="state" disabled value={state} label="Stan ofiary" options={victimStates} />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="dangerRating" disabled value={rating} label="Oceń skalę zagrożenia" type="number" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormTextArea id="description" disabled value={desc} label="Opis sytuacji:" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormSelect id="ambulance" onChange={e => setAmbulance(parseInt(e.target.value))} value={ambulance} label="Dostępne karetki:" options={ambulances} />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit" text="Przypisz karetkę" />
      </Row>
    </Form>
  );
};

export default AssignAmbulance;
