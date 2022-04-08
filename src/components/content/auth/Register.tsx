import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";

export default function Register() {
  return (
    <Container className="mt-5">
      <Form>
        <FormControl className="mb-3" label="Imię" type="text" />
        <FormControl className="mb-3" label="Nazwisko" type="text" />
        <FormControl className="mb-3" label="Email" type="email" />
        <FormControl className="mb-3" label="Hasło" type="password" />
        <FormControl className="mb-3" label="Data urodzenia" type="date" />
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit" text="Zarejestruj się" />
        </Row>
      </Form>
    </Container>
  );
}
