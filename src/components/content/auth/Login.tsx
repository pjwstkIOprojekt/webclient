import { useState, FormEvent } from "react";
import { handleLogin } from "../../../helpers/authHelper";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleLogin({
      username: username,
      password: password
    });
  };

  return (
    <Container className="d-flex flex-column justify-content-center min-vh-100">
      <h1 className="text-center mb-3">Logowanie</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center mb-3">
          <FormControl id="username" required onChange={e => setUsername(e.target.value)} value={username} className="w-50" label="Nazwa użytkownika" type="text" />
        </Row>
        <Row className="justify-content-center mb-3">
          <FormControl id="password" required onChange={e => setPassword(e.target.value)} value={password} className="w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center mt-3">
          <Button className="w-25" type="submit" text="Zaloguj się" />
        </Row>
        <Row className="justify-content-center mt-3">
          <Link to="/iforgor" className="w-25">Nie pamiętam hasła</Link>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
