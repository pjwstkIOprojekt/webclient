import { useState, FormEvent } from "react";
import { Form, Row } from "react-bootstrap";
import Button from "../../fragments/util/Button";
import FormControl from "../../fragments/forms/FormControl";


const AddTrustedPerson = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");



  return (
    <Form >
      <h1 className="text-center mt-3">Dodaj osobę zaufaną</h1>
      <Row className="justify-content-center mb-3">
        <FormControl id="firstName" onChange={e => setFirstName(e.target.value)} value={firstName} label="Imię: "  />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="lastName" onChange={e => setLastName(e.target.value)} value={lastName} label="Nazwisko: "  />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} label="Numer telefonu: "  />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="email" onChange={e => setEmail(e.target.value)} value={email} label="E-mail: "  />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit" text="Dodaj osobę" />
      </Row>
    </Form>
  );
};


export default AddTrustedPerson;
