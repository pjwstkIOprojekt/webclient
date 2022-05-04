import { useState, FormEvent } from "react";
import { Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import FormControl from "../../fragments/FormControl";
import FormTextArea from "../../fragments/FormTextArea";
import Button from "../../fragments/Button";

const accidentTypes = [
  "Covid",
  "Podstawowa",
  "Specjalistyczna"
];


const CreateAmbulance = () => {
  const [type, setType] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [maxAmount, setMaxAmount] = useState(1);
  const [registrationNumber, setRegistrationNumber] = useState("");




  return (
    <Form >
      <h1 className="text-center mt-3">Nowa karetka</h1>

      <Row className="justify-content-center mb-3">
        <FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} label="Rodzaj zdarzenia:" options={accidentTypes} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormControl id="mileage" onChange={e => setMileage(parseInt(e.target.value))} value={mileage} label="Przebieg" />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormControl id="capacity" onChange={e => setCapacity(parseInt(e.target.value))} value={capacity} label="Pojemność baku" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="maxAmount" onChange={e => setMaxAmount(parseInt(e.target.value))} value={maxAmount} label="Maksymalna ilość ratowników" type="number" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormTextArea id="registrationNumber" onChange={e => setRegistrationNumber(e.target.value)} value={registrationNumber} label="Numer rejestracyjny" />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit" text="Dodaj karetkę" />
      </Row>
    </Form>
  );
};

export default CreateAmbulance;