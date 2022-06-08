import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import Button from '../../fragments/util/Button';

const cols = [
    { name: "#", property: "id" },
    { name: "Imie", property: "firstName" },
    { name: "Nazwisko", property: "lastName" },
    { name: "Numer telefonu", property: "phoneNumber" },
    { name: "Specjalizacja", property: "specialization" },
    { name: "Oddział", property: "department" },
  ];

const DoctorsList = () => {
    const [doctor, setDoctor] = useState<any[]>([
        { id: 1, firstName: "Jan", lastName: "Nowak", phoneNumber:"500500500", specialization: "chirurgia", department: "Chirurgia ogólna" },
        { id: 2, firstName: "Jan", lastName: "Nowak",phoneNumber:"500500500", specialization: "Kardiologia", department: "Kardiochirurgia" }
      ]);


  
  const navigate = useNavigate();



  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Lista lekarzy</h3>
      <Table columns={cols} data={doctor} />
      <Button text="Wróć" onClick={e => navigate("/")} />
    </Container>
  )
  }

export default DoctorsList;