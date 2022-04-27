import { useState, FormEvent } from "react";
import { Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import FormCheck from "../../fragments/FormCheck";
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

const CreateReport = () => {
  const [type, setType] = useState(4);
  const [breath, setBreath] = useState(true);
  const [cons, setCons] = useState(false);
  const [rating, setRating] = useState(1);
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center mt-3">Nowe zgłoszenie</h1>
      <Row className="justify-content-center mb-3">
        <FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} className="w-75" label="Rodzaj zdarzenia:" options={accidentTypes} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="isBreathing" onChange={e => setBreath(!breath)} value={breath} className="w-75" label="Czy ofiara oddycha?" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormCheck id="isConscious" onChange={e => setCons(!cons)} value={cons} className="w-75" label="Czy ofiara jest przytomna?" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="dangerRating" onChange={e => setRating(parseInt(e.target.value))} value={rating} className="w-75" label="Oceń skalę zagrożenia" type="number" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormTextArea id="description" onChange={e => setDesc(e.target.value)} value={desc} className="w-75" label="Opis sytuacji:" />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit" text="Zgłoś zdarzenie" />
      </Row>
    </Form>
  );
};

export default CreateReport;
