import { useDarkMode } from "../../../hooks/useDarkMode";
import { Container, Form, FormGroup, Row, Button } from "react-bootstrap";

export default function Login() {
  const dark = useDarkMode();

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup className="mb-3">
          <Form.Label>Nazwa użytkownika</Form.Label>
          <Form.Control type="email" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Hasło</Form.Label>
          <Form.Control type="password" />
        </FormGroup>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit" variant={dark ? "warning" : "primary"}>Zaloguj się</Button>
        </Row>
      </Form>
    </Container>
  );
}
