import { useState, FormEvent } from "react";
import { Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import TextArea from "../../fragments/forms/FormTextArea";
import Button from "../../fragments/util/Button";

const SendMessage = () => {
  const [driver, setDriver] = useState(0);
  const [message, setMessage] = useState("");

  const drivers = [
    "Jan Nowak",
    "Piotr Kowalski",
    "Jan Kowalski"
  ];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container className="mb-3 justify-content-center ">
      <h3 className="text-center ">Wyszukaj lekarzy</h3>
      <Form onSubmit={onSubmit}>
        <Row className=" mb-3">
          <FormSelect id="city" onChange={e => setDriver(parseInt(e.target.value))} value={driver} label="Kierowca:" options={drivers} />
        </Row>
        <Row className=" mb-3">
          <TextArea value={message} onChange={(e) => setMessage(e.target.value)} label="Wiadomość:" />
        </Row>
        <Row className="justify-content-center mb-3">
          <Button className=" w-50 " type="submit">Wyślij</Button>
        </Row>
      </Form>
    </Container>
  );
};

export default SendMessage;
