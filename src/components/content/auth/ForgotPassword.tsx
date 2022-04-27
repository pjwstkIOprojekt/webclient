import { Container, Form, Row, Col } from "react-bootstrap";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";

const ForgotPassword = () => {
  return (
    <Container className="vertical-center">
      <h1 className="text-center mb-3">Nie pamiętam hasła</h1>
      <Form>
        <Row className="justify-content-center mb-3">
          <Col xs={6}>
            <FormControl id="email" className="" label="Podaj swój adres e-mail, który ma zostać użyty w celu weryfikacji" type="email" />
          </Col>
          <Col xs={3}>
            <Button className="mt-3" text="Wyślij kod" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6}>
            <FormControl id="code" className="" label="Tu wpisz wysłany kod" type="password" />
          </Col>
          <Col xs={3}>
            <Button className="mt-3" type="submit" text="Zweryfikuj" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
