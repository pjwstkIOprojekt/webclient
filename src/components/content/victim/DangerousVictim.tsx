import Button from '../../fragments/util/Button';
import Textarea from '../../fragments/forms/FormTextArea';
import {  Form, Row, Col } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import { useState, FormEvent } from "react";


const DangerousVictim = () => {
  const [firstName, setFirstName] = useState("Jan");
  const [lastName, setLastName] = useState("Nowak");
  const [address, setAddress] = useState("Warszawa, ul. Koszykowa");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form className="mt-5 w-50" onSubmit={handleSubmit}>
      <h3 >Niebezpieczny pacjent</h3>
      <Row>
        <Col>
          <FormControl
            id="firstName"
            className="mb-3 "
            value={firstName}
            label="Imię"
            type="text"
            onChange={e => setFirstName(e.target.value)}
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
            onChange={e => setLastName(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Address"
            className="mb-3 "
            value={address}
            label="Adres"
            type="text"
            onChange={e => setAddress(e.target.value)}
          />
        </Col>
      </Row>
      <h4> Uzasadnienie zagrożenia: </h4>
      <Textarea value={reason} onChange={e => setReason(e.target.value)} />
      <Button className="mt-5 w-50 me-1" type="submit">Oznacz niebezpiecznego poszkodowanego</Button>
    </Form>
  );
};

export default DangerousVictim;