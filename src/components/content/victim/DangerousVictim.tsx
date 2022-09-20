import { useState, FormEvent } from "react";
import { Form, Row, Col } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import FormTextArea from '../../fragments/forms/FormTextArea';
import Button from '../../fragments/util/Button';

const DangerousVictim = () => {
  const [firstName, setFirstName] = useState("Jan");
  const [lastName, setLastName] = useState("Nowak");
  const [address, setAddress] = useState("Warszawa, ul. Koszykowa");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form className="mt-5 w-50" onSubmit={handleSubmit}>
      <h3>Niebezpieczny pacjent</h3>
      <Row>
          <FormControl id="firstName" className="mb-3" value={firstName} label="Imię" onChange={e => setFirstName(e.target.value)} />
      </Row>
      <Row>
          <FormControl id="lastName" className="mb-3 " value={lastName} label="Nazwisko" onChange={e => setLastName(e.target.value)} />
      </Row>
      <Row>
          <FormControl id="Address" className="mb-3 " value={address} label="Adres" onChange={e => setAddress(e.target.value)} />
      </Row>
      <h4>Uzasadnienie zagrożenia:</h4>
      <FormTextArea value={reason} onChange={e => setReason(e.target.value)} />
      <Button className="mt-5 w-50 me-1" type="submit">Oznacz niebezpiecznego poszkodowanego</Button>
    </Form>
  );
};

export default DangerousVictim;
