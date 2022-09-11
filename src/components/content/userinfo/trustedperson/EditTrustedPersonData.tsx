import { useState } from "react";
import { Container } from "react-bootstrap";
import TrustedPersonForm from "./TrustedPersonForm";

const EditTrustedPersonData = () => {
  const [firstName, setFirstName] = useState("Jan");
  const [lastName, setLastName] = useState("Nowak");
  const [email, setEmail] = useState("jannowak@email.com");
  const [phoneNumber, setPhoneNumber] = useState("808707606");

  return (
    <Container className="my-3">
      <h1 className="mb-3">Osoba zaufana</h1>
      <TrustedPersonForm />
    </Container>
  );
};

export default EditTrustedPersonData;
