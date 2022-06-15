import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import Button from '../../fragments/util/Button';


const cities = [
    "Warszawa",
    "Gdańsk"
  ];
  const hospitals = [
    "USK WUM ul. Banacha",
    "Centrum Zdrowia Dziecka"
  ];

  const departments = [
      "Kardiologia",
      "Chirurgia"
  ]

const Doctors = () => {

      const [city, setCity] = useState(0);
      const [hospital, setHospital] = useState(0);
      const [department, setDepartment] = useState(0);
  
  const navigate = useNavigate();





  return (
    <Container className="mb-3 justify-content-center ">
      <h3 className="text-center ">Wyszukaj lekarzy</h3>
      <Form>
      <Row className=" mb-3">
        <FormSelect id="city" onChange={e => setCity(parseInt(e.target.value))} value={city} label="Miasto:" options={cities} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormSelect id="hospital" onChange={e => setHospital(parseInt(e.target.value))} value={hospital} label="Szpital: " options={hospitals} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormSelect id="department" onChange={e => setDepartment(parseInt(e.target.value))} value={department} label="Oddział: " options={departments} />
      </Row>
      <Row className="justify-content-center mb-3">
        <Button className=" w-50 " type="submit" onClick={e => navigate("doctorsList")}>Wyszukaj</Button>
        
      </Row>
      <Row className="justify-content-center mb-5">
        
          <Button className=" w-50" onClick={e => navigate("/")}>Wróć</Button>
      </Row>
      </Form>
    </Container>
  )
  }

export default Doctors;