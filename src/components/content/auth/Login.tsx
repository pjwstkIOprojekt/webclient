import { useState, FormEvent } from "react";
import { loginUser } from "../../../api/authCalls";
import { useLogin } from "../../../hooks/useAuth";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let status = -1;
    
    loginUser({
      email: email,
      password: password,
    }).then(res => {
      status = res.status;
      return res.json();
    }).then(data => {
      if (status === 200 && data.token && data.roles) {
        login(data.token, data.roles);
      }
    }
    ).catch(console.log);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Logowanie</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormControl id="email" required onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label="Email" type="email" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="password" required onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit">Zaloguj się</Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
