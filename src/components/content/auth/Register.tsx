import { useState, FormEvent } from "react";
import { registerUser, loginUser } from "../../../api/authCalls";
import { useLogin } from "../../../hooks/useAuth";
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
  const login = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== passwordCheck) {
      setError("Powtórzone hasło się różni!");
      return;
    }

    const mail = email;
    const pass = password;

    registerUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthDate: birthDate,
      phoneNumber: phoneNumber
    }).then(res => {
      if (res.status === 200) {
        let status = -1;

        loginUser({
          email: mail,
          password: pass
        }).then(res => {
          status = res.status;
          return res.json();
        }).then(data => {
          if (status === 200 && data.token && data.roles) {
            login(data.token, data.roles);
          }
        }).catch(console.log);
      }
    }).catch(console.log);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Rejestracja</h1>
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
          <FormControl id="password" required onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="passwordCheck" required onChange={e => setPasswordCheck(e.target.value)} value={passwordCheck} className="mb-3 w-50" label="Powtórz hasło" type="password" error={error} />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit">Zarejestruj się</Button>
        </Row>
        <CAlert className="my-5">
          <Alert.Heading>Dlaczego zbieramy dane?</Alert.Heading>
          <p>Wszystkie powyższe dane są niezbędne do prawidłowego świadczenia usług.</p>
        </CAlert>
      </Form>
    </Container>
  );
};

export default Register;
