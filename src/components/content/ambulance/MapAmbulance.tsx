import { useState, FormEvent } from "react";
import { Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import Button from "../../fragments/Button";

const city = [
    "Warszawa",
    "Gdańsk"
  ];

const MapAmbulance = () => {
  const [type, setType] = useState(4);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center mt-3">Mapa z położeniem karetek</h1>
      <Row className="justify-content-center mb-3">
        <FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} label="Miasto:" options={city} />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit" text="Wyszukaj" />
      </Row>
    </Form>
  );
};

export default MapAmbulance;