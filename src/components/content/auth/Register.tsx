import { useState, FormEvent } from "react";
import { registerUser, login } from "../../../apiCalls/authCalls";
import { acceptCookies } from "../../CookieConsent";
import { handleLogin } from "../../../helpers/authHelper";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";

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
        login({
          username: user,
          password: pass
        }).then(res => {
          response = res;
          return res.text();
        }).then(token => {
          if (response.status === 200 && token) {
            acceptCookies();
            handleLogin({ token: token });
          }
        });
      }

      console.log(response);
      console.log(data);
    }).catch(err => console.log(err));
  };

  return (
    <Container className="mt-5">
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
          <Button className="mt-3 w-25" type="submit" text="Zarejestruj się" />
        </Row>
      </Form>
    </Container>
  );
};

export default Register;
