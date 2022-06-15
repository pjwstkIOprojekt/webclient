import { useState, FormEvent } from "react";
import { registerUser } from "../../../apiCalls/authCalls";
import { Container, Form, Row, Alert } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";
import CAlert from "../../fragments/util/Alert";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    registerUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
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
          <FormControl id="firstName" onChange={e => setFirstName(e.target.value)} value={firstName} className="mb-3 w-50" label="Imię" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="lastName" onChange={e => setLastName(e.target.value)} value={lastName} className="mb-3 w-50" label="Nazwisko" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="email" onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label="Email" type="email" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="username" onChange={e => setUsername(e.target.value)} value={username} className="mb-3 w-50" label="Nazwa użytkownika" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="password" onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="birthDate" onChange={e => setBirthDate(e.target.value)} value={birthDate} className="mb-3 w-50" label="Data urodzenia" type="date" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} className="mb-3 w-50" label="Numer telefonu" type="text" />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit">Zarejestruj się</Button>
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
