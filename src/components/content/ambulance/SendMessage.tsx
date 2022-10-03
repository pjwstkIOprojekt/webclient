import { useState, useEffect, FormEvent } from "react";
import { Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import TextArea from "../../fragments/forms/FormTextArea";
import Button from "../../fragments/util/Button";

const SendMessage = () => {
  const [driver, setDriver] = useState(0);
  const [drivers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // No endpoints?
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container className="mb-3 justify-content-center ">
      <h3 className="text-center ">Wyślij wiadomość do kierowcy</h3>
      <Form onSubmit={onSubmit}>
        <Row className=" mb-3">
          <FormSelect id="city" onChange={e => setDriver(parseInt(e.target.value))} value={driver} label="Kierowca:" options={drivers} />
        </Row>
        <Row className=" mb-3">
          <TextArea id="message" value={message} onChange={(e) => setMessage(e.target.value)} label="Wiadomość:" />
        </Row>
        <Row className="justify-content-center mb-3">
          <Button className="w-50" type="submit">Wyślij</Button>
        </Row>
      </Form>
    </Container>
  );
};

export default SendMessage;
