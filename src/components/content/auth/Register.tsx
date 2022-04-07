import { useDarkMode } from "../../../hooks/useDarkMode";
import { Container, Form, FormGroup, Row, Button } from "react-bootstrap";

export default function Register() {
  const dark = useDarkMode();

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup className="mb-3">
          <Form.Label>Imię</Form.Label>
          <Form.Control type="text" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Nazwisko</Form.Label>
          <Form.Control type="text" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Hasło</Form.Label>
          <Form.Control type="password" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Data urodzenia</Form.Label>
          <Form.Control type="date" />
        </FormGroup>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit" variant={dark ? "dark-first" : "light-second"}>Zarejestruj się</Button>
        </Row>
      </Form>
    </Container>
  );
}
