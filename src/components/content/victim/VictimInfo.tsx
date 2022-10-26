import { useNavigate } from "react-router-dom";
import Button from '../../fragments/util/Button';
import {  Form, Row, Col, Container } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import { useState } from "react";

const DangerousVictim = () => {
  const [firstName] = useState("Jan");
  const [lastName] = useState("Nowak");
  const [date] = useState("2022-05-20");
  const [description] = useState("opis");
  const [bloodtype] = useState("A+");
  const [allergies] = useState("brak");
  const [breathing] = useState("tak");
  const [conscious] = useState("tak");
  const navigate = useNavigate();

  return (
    <Container>
    <h3 className="text-center mt-3">Dane poszkodowanego</h3>
    <Form className="mt-3 w-50 me-1">
      
      <Row >
        <Col>
          <FormControl
            id="firstName"
            className="mb-3 "
            value={firstName}
            label="Imię"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="lastName"
            className="mb-3 "
            value={lastName}
            label="Nazwisko"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={date}
            label="Data zdarzenia"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={description}
            label="Opis"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={bloodtype}
            label="Grupa krwi"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={allergies}
            label="Alergie"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={breathing}
            label="Czy oddycha?"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={conscious}
            label="Czy przytomna?"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      
    </Form>

    <h3 className="text-center mt-3">Wyślij dane pacjenta</h3>
    <Form>
      <Row className="justify-content-center mb-3">
        <Button className=" w-50 " type="submit">Wyślij dane</Button>
        
      </Row>
      <Row className="justify-content-center mb-5">
        
        <Button className=" w-50" onClick={e => navigate("/")}>Wróć</Button>
      </Row>
      </Form>
      
    </Container>
  );
};

export default DangerousVictim;
