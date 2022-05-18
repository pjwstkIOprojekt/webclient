import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../apiCalls/authCalls";
import { Container, Form, Row, Alert as Al } from "react-bootstrap";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";
import Alert from "../../fragments/Alert";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = username;
    const pass = password;
    let response: Response;

    registerUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: user,
      password: pass,
      birthDate: new Date(birthDate),
      phoneNumber: phoneNumber
    }).then(res => {
      response = res;
      return res.json();
    }).then(data => {
      if (response.status === 200 && data) {
      }
    }).catch(err => console.log(err));
  };

  return (
    <Container className="vertical-center">
      <h1 className="text-center mb-3">Rejestracja</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center mb-3">
          <FormControl id="firstName" required onChange={e => setFirstName(e.target.value)} value={firstName} className="w-50" label="Imię" type="text" />
        </Row>
        <Row className="justify-content-center mb-3">
          <FormControl id="lastName" required onChange={e => setLastName(e.target.value)} value={lastName} className="w-50" label="Nazwisko" type="text" />
        </Row>
        <Row className="justify-content-center mb-3">
          <FormControl id="email" required onChange={e => setEmail(e.target.value)} value={email} className="w-50" label="Email" type="email" />
        </Row>
        <Row className="justify-content-center mb-3">
          <FormControl id="username" required onChange={e => setUsername(e.target.value)} value={username} className="w-50" label="Nazwa użytkownika" type="text" />
        </Row>
        <Row className="justify-content-center mb-3">
          <FormControl id="password" required onChange={e => setPassword(e.target.value)} value={password} className="w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center mb-3">
          <FormControl id="birthDate" required onChange={e => setBirthDate(e.target.value)} value={birthDate} className="w-50" label="Data urodzenia" type="date" />
        </Row>
        <Row className="justify-content-center mb-3">
          <FormControl id="phoneNumber" required onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} className="w-50" label="Numer telefonu" type="text" />
        </Row>
        <Row className="justify-content-center mt-3">
          <Button className="w-25" type="submit" text="Zarejestruj się" />
        </Row>
        <Row className="justify-content-center mt-3">
          <Alert className="w-75">
            <Al.Heading>Dlaczego zbieramy dane?</Al.Heading>
            <p>Powyżej podane dane są zbierane w celu umożliwienia prawidłowego świadczenia usług</p>
          </Alert>
        </Row>
      </Form>
    </Container>
  );
};

export default Register;
