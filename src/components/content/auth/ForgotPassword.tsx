import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";

const ForgotPassword = () => {
  return (
    <Container className="mt-5">
      <Form>
        <Row className="justify-content-center">
          <FormControl id="email" className="mb-3 w-50" label="Podaj swój adres e-mail, który ma zostać użyty w celu weryfikacji" type="email" />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" text="Wyślij kod" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="code" className="mb-3 w-50" label="Tu wpisz wysłany kod" type="password" />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit" text="Zweryfikuj" />
        </Row>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
