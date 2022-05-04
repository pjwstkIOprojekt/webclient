import { useNavigate, Link } from "react-router-dom";
import Table from "../../fragments/Table";
import Button from '../../fragments/Button';
import { Container } from "react-bootstrap";

const AmbulanceList = () => {
  const navigate = useNavigate();

  const cols = [
    { name: "#", property: "id" },
    { name: "Rodzaj karetki", property: "kind" },
    { name: "Przebieg", property: "mileage" },
    { name: "Pojemność baku", property: "capacity" },
    { name: "Maksymalna ilość ratowników", property: "maxAmount" },
    { name: "Numer rejestracyjny", property: "registrationNumber" },
    { name: "Czy jest dostępna?", property: "available" , func: (x: boolean) => x ? "Tak" : "Nie"  },
    { name: "Ratownicy", property: "paramedic" },
    { name: "Usuń", property: "delete" },
    { name: "Edytuj", property: "edit" }
    
  ];

  const ambulances = [
    { id: 1, kind:  "Covid", mileage: "10000", capacity:"70", maxAmount: "5", registrationNumber: "WW 40404", available: true, paramedic: <Button text="Przypisz" onClick ={e => navigate("/paramedic")}/>, edit: <Button text="Edytuj" onClick={e => navigate("/ambulance/edit")}/>, delete:  <Button text="Usuń"/>},
    { id: 2, kind:  "Covid", mileage: "20000", capacity:"80", maxAmount: "6", registrationNumber: "WW 50505", available: false, paramedic: <Button text="Przypisz" onClick ={e => navigate("/paramedic")}/>, edit: <Button text="Edytuj" onClick={e => navigate("/ambulance/edit")}/>, delete: <Button text="Usuń"/>},

  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Karetki</h3>
      <Table columns={cols} data={ambulances} />
      <Button text="Dodaj" onClick={e => navigate("/ambulance/add")} />
    </Container>
  )
}

export default AmbulanceList;