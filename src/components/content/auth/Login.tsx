import { useState } from "react";
import { loginUser, JwtResponse } from "../../../api/authCalls";
import { useLogin } from "../../../hooks/useAuth";
import { Container, Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Email from "../../fragments/forms/api/Email";
import Password from "../../fragments/forms/api/Password";
import Button from "../../fragments/util/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useLogin();

  const handleSubmit = () => {
    let status = -1;
    
    loginUser({
      email: email,
      password: password,
    }).then(res => {
      status = res.status;
      return res.json();
    }).then((data: JwtResponse) => {
      if (status === 200) {
        if (data.token && data.roles && data.email) {
          login(data.token, data.roles, data.email);
        } else {
          setError("Odpowiedź serwera została uszkodzona lub częściowo zgubiona. Spróbuj ponownie.");
        }
      } else {
        setError("Wystąpił nieznany błąd. Spróbuj ponownie później.");
      }
    }
    ).catch(err => {
      console.error(err);
      setError("Nieprawidłowy email lub hasło.");
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Logowanie</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Email id="email" required onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label="Email" />
        </Row>
        <Row className="justify-content-center">
          <Password id="password" required onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label="Hasło" />
        </Row>
        <Row className="justify-content-center">
          <Button className="my-3 w-25" type="submit">Zaloguj się</Button>
        </Row>
        {error ? (
          <Row className="justify-content-center mt-5">
            <Alert variant="danger" className="w-50">
              <Alert.Heading>Błąd</Alert.Heading>
              <p>{error}</p>
            </Alert>
          </Row>
        ) : ""}
      </Form>
    </Container>
  );
};

export default Login;
