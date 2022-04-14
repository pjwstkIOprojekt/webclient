import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { login } from "../../../apiCalls/authCalls";
import { acceptCookies } from "../../CookieConsent";
import { handleLogin } from "../../../helpers/authHelper";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response: Response;

    login({
      username: username,
      password: password
    }).then(res => {
      response = res;
      return res.text();
    }).then(data => {
      if (response.status === 200 && data) {
        acceptCookies();
        handleLogin({ token: data });
      }

      console.log(response);
      console.log(data);
    }).catch(err => console.log(err));
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormControl id="username" onChange={e => setUsername(e.target.value)} value={username} className="mb-3 w-50" label="Nazwa użytkownika" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="password" onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit" text="Zaloguj się" />
        </Row>
      </Form>
      <Row className="justify-content-center">
        <Button className="mt-3 w-25" onClick={() => navigate("/iforgor")} text="Nie pamiętam hasła" />
      </Row>
    </Container>
  );
};

export default Login;
