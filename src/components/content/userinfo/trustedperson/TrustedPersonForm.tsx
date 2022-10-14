import { useState, useEffect, FormEvent } from "react";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../../fragments/forms/FormControl";
import FormPhoneNumber from "../../../fragments/forms/FormPhoneNumber";
import Button from "../../../fragments/util/Button";

const TrustedPersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [readOnly, setReadOnly] = useState(true);

  useEffect(() => {
    /*getUserById(0).then(res => res.json()).then(data => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhoneNumber(data.phone);
    }).catch(err => console.log(err));*/
  }, []);

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (!readOnly) {
      /*updateUser(0, {
        firstName: firstName,
        lastName: lastName,
        phone: phoneNumber
      });*/
    }

    setReadOnly(!readOnly);
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">Osoba zaufana</h1>
      <Form onSubmit={onSubmit}>
        <Row md={2}>
          <FormControl id="firstName" required onChange={e => setFirstName(e.target.value)} className="mb-3" value={firstName} label="Imię" disabled={readOnly} />
          <FormControl id="lastName" required onChange={e => setLastName(e.target.value)} className="mb-3" value={lastName} label="Nazwisko" disabled={readOnly} />
        </Row>
        <Row md={2}>
          <FormControl id="email" onChange={e => setEmail(e.target.value)} className="mb-3" value={email} label="Email" type="email" disabled={readOnly} />
          <FormPhoneNumber id="phoneNumber" required onChange={e => setPhoneNumber(e.target.value)} className="mb-3" value={phoneNumber} label="Numer telefonu" disabled={readOnly} />
        </Row>
        <Button type="submit">{readOnly ? "Edytuj" : "Zapisz"}</Button>
      </Form>
    </Container>
  );
};

export default TrustedPersonForm;
