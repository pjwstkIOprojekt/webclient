//import { useDarkMode } from "../hooks/useDarkMode";
import { useParams } from "react-router-dom";
import { Container, Form, FormGroup, Row, Button } from "react-bootstrap";

export default function Hello() {
  //const dark = useDarkMode();
  const { style } = useParams();

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup className="mb-3">
        <Form.Label>Nazwa użytkownika</Form.Label>
        <Form.Control type="email" />
      </FormGroup>
      <FormGroup className="mb-3">
        <Form.Label>Tekst</Form.Label>
        <Form.Control type="password" />
        </FormGroup>
        <Row className="justify-content-center">
        <Button className="mt-3 w-25" type="submit" variant={true ? "warning" : "primary"}>
          Zaloguj się
        </Button>
        </Row>
      </Form>
    </Container>
  );
}
