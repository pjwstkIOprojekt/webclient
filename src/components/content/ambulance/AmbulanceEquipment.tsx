import { useState, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";

const AmbulanceEquipment = () => {
  const [name, setName] = useState("");
  const [minAmount, setMinAmount] = useState(1);
  const [metric, setMetric] = useState("");
  const { ambulanceId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("../ambulances");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{`${ambulanceId === undefined ? "Dodawanie" : "Edycja"} wyposażenia`}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormControl id="name" onChange={e => setName(e.target.value)} value={name} className="mb-3 w-50" label="Nazwa" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="amount" onChange={e => setMinAmount(parseInt(e.target.value))} value={minAmount} className="mb-3 w-50" label="Minimalna ilość" type="number" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="metric" onChange={e => setMetric(e.target.value)} value={metric} className="mb-3 w-50" label="Jednostak miary" type="text" />
        </Row>
        <Row className="justify-content-center">
          <Button className="my-3 w-25" type="submit">{ambulanceId === undefined ? "Dodaj wyposażenie" : "Zapisz zmiany"}</Button>
        </Row>
        {ambulanceId === undefined ? "" : (
          <>
            <h2 className="text-center mt-3">Wyposażenie w karetce</h2>
            <Row className="justify-content-center">
              <FormControl value="2022-07-24" disabled className="mb-3 w-50" label="Data przypisania do karetki" type="date" />
            </Row>
            <Row className="justify-content-center">
              <FormControl value="2022-09-24" disabled className="mb-3 w-50" label="Data planowanego uzupełnienia" type="date" />
            </Row>
            <Row className="justify-content-center">
              <FormControl value="5/25 l" disabled className="mb-3 w-50" label="Ogólne zużycie" type="text" />
            </Row>
          </>
        )}
      </Form>
    </Container>
  );
}

export default AmbulanceEquipment;
