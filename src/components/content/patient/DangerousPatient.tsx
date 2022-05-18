import { useNavigate } from "react-router-dom";
import Table from "../../fragments/Table";
import Button from '../../fragments/Button';
import Textarea from '../../fragments/FormTextArea';
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const PatientList = () => {
  const navigate = useNavigate();

  const cols = [
    { name: "#", property: "id" },
    { name: "Imie", property: "name" },
    { name: "Nazwisko", property: "surname" },
    { name: "Adres zdarzenia", property: "address" },
    { name: "Data zdarzenia", property: "date" },
    
  ];
  const [reason, setReason] = useState("")
  const patients = [
    { id: 1, name:  "Jan", surname: "Nowak", address: "Warszawa, ul. Koszykowa", date: "2022-05-15"},

  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Niebezpieczny pacjent</h3>
      <Table columns={cols} data={patients} />
      <h4> Uzasadnienie zagrożenia: </h4>
        <Textarea  value={reason} onChange={(e) => setReason(e.target.value)}/>
        
        <Button className="mt-3 w-50 me-1" type="submit" text="Oznacz niebezpiecznego pacjenta" />
      <Button text="Wróć" className="mt-3 w-50" onClick={e => navigate("/")} />
      
    </Container>
  )
}

export default PatientList;