import { useNavigate } from "react-router-dom";
import Table from "../../fragments/Table";
import Button from '../../fragments/Button';
import { Container } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import { Form, Row } from "react-bootstrap";
import { useState } from "react";



const PatientInfo = () => {
  const navigate = useNavigate();

  const cities = [
    "Warszawa",
    "Gdańsk"
  ];
const hospitals = [
    "USK WUM ul. Banacha",
    "Centrum Zdrowia Dziecka"
];
  const cols = [
    { name: "#", property: "id" },
    { name: "Imie", property: "name" },
    { name: "Nazwisko", property: "surname" },
    { name: "Adres zdarzenia", property: "address" },
    { name: "Data zdarzenia", property: "date"},
    { name: "Opis", property: "description"},
    { name: "Grupa krwi", property: "bloodGroup"},
    { name: "Alergie", property: "allergies"},
    { name: "Czy oddycha?", property: (x: any) => x.breathing ? "Tak" : "Nie" },
    { name: "Czy przytomna?", property: (x: any) => x.conscious ? "Tak" : "Nie" }
    
  ];

  const patients = [
    { id: 1, name:  "Jan", surname: "Nowak", address: "Warszawa, ul. Koszykowa", date: "2022-05-15", description: "opis", bloodGroup: "A+", allergies: "brak", breathing: true, conscious: true}
  ];

  const [city, setCity] = useState(0);
  const [hospital, setHospital] = useState(0);


  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Pacjenci</h3>
      <Table columns={cols} data={patients} />

      <Form >
      <h1 className="text-center mt-3">Wyślij dane pacjenta</h1>
      <Row className="justify-content-center mb-3">
        <FormSelect id="city" onChange={e => setCity(parseInt(e.target.value))} value={city} label="Miasto:" options={cities} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormSelect id="hospital" onChange={e => setHospital(parseInt(e.target.value))} value={hospital} label="Szpital: " options={hospitals} />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit" text="Wyślij dane" />
      </Row>
    </Form>
      <Button  text="Wróć" onClick={e => navigate("/")} />
    </Container>
  )
}

export default PatientInfo;