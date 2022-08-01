import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import Button from '../../fragments/util/Button';
import TextArea from '../../fragments/forms/FormTextArea';

const drivers = [
    "Jan Nowak",
    "Piotr Kowalski",
    "Jan Kowalski"
  ];


const SendMessage = () => {

    const [driver, setDriver] = useState(0);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();





  return (
    <Container className="mb-3 justify-content-center ">
      <h3 className="text-center ">Wyszukaj lekarzy</h3>
      <Form>
        <Row className=" mb-3">
          <FormSelect id="city" onChange={e => setDriver(parseInt(e.target.value))} value={driver} label="Kierowca:" options={drivers} />
        </Row>

        <Row className=" mb-3">
          <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
        </Row>

        <Row className="justify-content-center mb-3">
          <Button className=" w-50 " type="submit">Wyślij</Button>
        </Row>
        <Row className="justify-content-center mb-5">
          <Button className=" w-50" onClick={e => navigate("/")}>Wróć</Button>
        </Row>
      </Form>
    </Container>
  )
  }

export default SendMessage;