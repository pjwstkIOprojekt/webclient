import { useNavigate } from "react-router-dom";
import Table from "../../fragments/Table";
import Button from '../../fragments/Button';
import { Container } from "react-bootstrap";

const AmbulanceList = () => {
  const navigate = useNavigate();

  const cols = [
    { name: "#", property: "id" },
    { name: "Rodzaj karetki", property: "kind" },
    { name: "Lista ratowników", property: "paramedics" },
    { name: "Numer rejestracyjny", property: "registrationNumber" },
    { name: "Czy jest dostępna?", property: (x: any) => x.available ? "Tak" : "Nie"  },
    
    
  ];

  const ambulances = [
    { id: 1, kind:  "Covid", registrationNumber: "WW 40404", available: true, paramedics: "Jan Nowak  Adam Kowalski" },
    { id: 2, kind:  "Covid", registrationNumber: "WW 50505", available: false, paramedics: "Jan Nowak  Adam Kowalski"},

  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Karetki</h3>
      <Table columns={cols} data={ambulances} />
      <Button text="Wróć" onClick={e => navigate("/")} />
    </Container>
  )
}

export default AmbulanceList;