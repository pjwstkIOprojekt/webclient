import { useNavigate } from "react-router-dom";
import Button from '../../fragments/util/Button';
import {  Form, Row, Col, Container } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import FormControl from "../../fragments/forms/FormControl";
import { useState } from "react";

const cities = [
  "Warszawa",
  "Gdańsk"
];
const hospitals = [
  "USK WUM ul. Banacha",
  "Centrum Zdrowia Dziecka"
];


const DangerousVictim = () => {
  const [firstName] = useState("Jan");
  const [lastName] = useState("Nowak");
  const [address] = useState("Warszawa, ul. Koszykowa");
  const [date] = useState("2022-05-20");
  const [description] = useState("opis");
  const [bloodtype] = useState("A+");
  const [allergies] = useState("brak");
  const [breathing] = useState("tak");
  const [conscious] = useState("tak");
  const [city, setCity] = useState(0);
  const [hospital, setHospital] = useState(0);
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
            id="Address"
            className="mb-3 "
            value={address}
            label="Adres zamieszkania"
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
        <FormSelect id="city" onChange={e => setCity(parseInt(e.target.value))} value={city} label="Miasto:" options={cities} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormSelect id="hospital" onChange={e => setHospital(parseInt(e.target.value))} value={hospital} label="Szpital: " options={hospitals} />
      </Row>
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