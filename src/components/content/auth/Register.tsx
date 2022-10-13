import { useState, FormEvent } from "react";
import { registerUser } from "../../../api/authCalls";
import { Container, Form, Row, Alert } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import FormPhoneNumber from "../../fragments/forms/FormPhoneNumber";
import Button from "../../fragments/util/Button";
import CAlert from "../../fragments/util/Alert";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== passwordCheck) {
      setError("Powtórzone hasło się różni!");
      return;
    }

    registerUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthDate: new Date(birthDate),
      phoneNumber: phoneNumber
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Zarejestruj się</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormControl id="firstName" required onChange={e => setFirstName(e.target.value)} value={firstName} className="mb-3 w-50" label="Imię" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="lastName" required onChange={e => setLastName(e.target.value)} value={lastName} className="mb-3 w-50" label="Nazwisko" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="email" required onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label="Email" type="email" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="birthDate" required onChange={e => setBirthDate(e.target.value)} value={birthDate} className="mb-3 w-50" label="Data urodzenia" type="date" />
        </Row>
        <Row className="justify-content-center">
          <FormPhoneNumber id="phoneNumber" required onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} className="mb-3 w-50" label="Numer telefonu" />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit">Zarejestruj się</Button>
        </Row>
        <Row className="justify-content-center">
          <FormControl id="password" required onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="passwordCheck" required onChange={e => setPasswordCheck(e.target.value)} value={passwordCheck} className="mb-3 w-50" label="Powtórz hasło" type="password" error={error} />
        </Row>
        <CAlert className="mt-5">
          <Alert.Heading>Dlaczego zbieramy dane?</Alert.Heading>
          <p>Wszystkie powyższe dane są niezbędne do prawidłowego świadczenia usług.</p>
        </CAlert>
      </Form>
    </Container>
  );
};

export default Register;
