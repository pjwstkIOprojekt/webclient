import { useState, FormEvent } from "react";
import { Container, Form, Row } from "react-bootstrap";
import FormRow from "../../fragments/FormRow";
import Button from "../../fragments/Button";

const CreateReport = () => {
  const [breath, setBreath] = useState(false);
  const [cons, setCons] = useState(false);
  const [rating, setRating] = useState(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FormRow rowClass="justify-content-center" id="isBreathing" onChange={e => setBreath(e.target.value === "true")} value={breath ? "true" : ""} className="mb-3 w-50" label="Czy ofiara oddycha?" type="checkbox" />
        <FormRow rowClass="justify-content-center" id="isConscious" onChange={e => setCons(e.target.value === "true")} value={cons ? "true" : ""} className="mb-3 w-50" label="Czy ofiara jest przytomna?" type="checkbox" />
        <FormRow rowClass="justify-content-center" id="dangerRating" onChange={e => setRating(parseInt(e.target.value))} value={rating} className="mb-3 w-50" label="Oceń skalę zagrożenia" type="number" />
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit" text="Zgłoś zdarzenie" />
        </Row>
      </Form>
    </Container>
  );
};

export default CreateReport;
