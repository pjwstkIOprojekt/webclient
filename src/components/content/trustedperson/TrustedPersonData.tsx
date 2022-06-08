import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import TrustedPersonForm from "./TrustedPersonForm";

const TrustedPersonData = () => {
  const [firstName] = useState("Jan");
  const [lastName] = useState("Nowak");
  const [email] = useState("jannowak@email.com");
  const [phoneNumber] = useState("808707606");

  return (
    <Container className="my-3">
      <h1 className="mb-3">Osoba zaufana</h1>
      <TrustedPersonForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        buttonLabel="Edytuj"
        link="edit"
        disabled={true}
      />
    </Container>
  );
};

export default TrustedPersonData;
