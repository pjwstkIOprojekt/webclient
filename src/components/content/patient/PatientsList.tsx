import { useNavigate } from "react-router-dom";
import Table from "../../fragments/Table";
import Button from '../../fragments/Button';
import { Container } from "react-bootstrap";
import Link from "../../fragments/Link";

const PatientsList = () => {
  const navigate = useNavigate();

  const cols = [
    { name: "#", property: "id" },
    { name: "Imie", property: "name" },
    { name: "Nazwisko", property: "surname" },
    { name: "Adres zdarzenia", property: "address" },
    { name: "Data zdarzenia", property: "date" },
    { name: "Niebezpieczny?", property: (x: any) => <Link to={`/patient/${x.id}`}><Button text="Oznacz"/></Link>},
    { name: "Dane", property: (x: any) => <Link to={`/patientInfo/${x.id}`}><Button text="Wyślij"/></Link>},
    
  ];

  const patients = [
    { id: 1, name:  "Jan", surname: "Nowak", address: "Warszawa, ul. Koszykowa", date:"2022-05-15"},
    { id: 2, name:  "Jan", surname: "Nowak", address: "Warszawa, ul. Koszykowa", date:"2022-05-16"},
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Pacjenci</h3>
      <Table columns={cols} data={patients} />
      <Button text="Wróć" onClick={e => navigate("/")} />
    </Container>
  )
}

export default PatientsList;