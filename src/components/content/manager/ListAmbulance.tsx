import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAmbulances } from "../../../apiCalls/ambulanceCalls";
import { Container, Col } from "react-bootstrap";
import Spinner from "../../fragments/Spinner";
import Button from '../../fragments/Button';
import Table from "../../fragments/Table";

const ListAmbulance = () => {
  const [ambulances, setAmbulances] = useState<any[]>([
    { id: 1, kind: "Covid",  paramedics: "Jan Nowak  Adam Kowalski", registrationNumber: "WW 40404", mileage: "1000000", capacity: "70", add: <Button  text="Przypisz " onClick={e => navigate("/listAmbulances/addParamedics")}/>, edit: <Button  text="Edytuj" onClick={e => navigate("/editAmbulance/1")}/>,  delete: <Button  text="Usuń" />},
    { id: 2, kind: "Transportowa",  paramedics: "Jan Nowak  Adam Kowalski", registrationNumber: "WW 50505", mileage: "500000", capacity: "80", add: <Button  text="Przypis" onClick={e => navigate("/listAmbulances/addParamedics")}/> , edit: <Button  text="Edytuj" onClick={e => navigate("/editAmbulance/1")} />,  delete: <Button  text="Usuń" />}
  ]);

  
  const navigate = useNavigate();
  const [sort, setSort] = useState("");


  

  const cols = [
    {
      name: "#", property: "id", sortBy: "id", filterBy: "id" },
    { name: "Rodzaj karetki", property: "kind", sortBy: "kind", filterBy: "kind" },
    { name: "Lista ratowników", property: "paramedics", filterBy: "paramedics" },
    { name: "Numer rejestracyjny", property: "registrationNumber", sortBy: "registrationNumber", filterBy: "registrationNumber" },
    { name: "Przebieg", property: "mileage", sortBy: "mileage", filterBy: "mileage" },
    { name: "Pojemność baku", property: "capacity", sortBy: "capacity", filterBy: "capacity" },
    { name: "Dodaj ratowników", property: "add" },
    { name: "Edytuj ratownika", property: "edit" },
    { name: "Usuń ratownika", property: "delete" },
  
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Karetki</h3>
      <Table columns={cols} data={ambulances} />
      <Button  text="Dodaj karetkę" onClick={e => navigate("/createAmbulance/1")} />
    </Container>
  )
}

export default ListAmbulance;