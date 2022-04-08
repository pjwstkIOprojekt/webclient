import { useNavigate } from "react-router-dom";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Form>
        <FormControl className="mb-3" label="Nazwa użytkownika" type="email" />
        <FormControl className="mb-3" label="Hasło" type="password" />
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit" text="Zaloguj się" />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" onClick={() => navigate("/iforgor")} text="Nie pamiętam hasła" />
        </Row>
      </Form>
    </Container>
  );
}
