import { useNavigate } from "react-router-dom";
import Table from "../../fragments/Table";
import Button from '../../fragments/Button';
import { Container } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import { useState } from "react";


const AmbulanceTypes = [
    "A",
    "B",
    "C"
  ];
  const AmbulanceKind = [
    "Covid",
    "Transportowa"
  ];
const AcceptReport = () => {
  const navigate = useNavigate();

  const [type, setType] = useState(0);
  const [kind, setKind] = useState(0);

  const cols = [
    { name: "#", property: "id" },
    { name: "Ofiara jest przytomna?", property: "victimConsious", func: (x: boolean) => x ? "Tak" : "Nie" },
    { name: "Ofiara oddycha?", property: "victimBreathing", func: (x: boolean) => x ? "Tak" : "Nie" },
    { name: "Data", property: "date" },
    { name: "Skala zagrożenia", property: "dangerRating" },
    { name: "Opis", property: "description", func: (x: string) => x.substring(0, 100) },
    { name: "Rodzaj Karetki", property: "kindAmbulance"},
    { name: "Typ Karetki", property: "typeAmbulance"},
    { name: "Potwierdź", property: "accept"},
    { name: "Odrzuć", property: "refuse"},
  ];

  const report = [
    { id: 1, victimConsious: true, victimBreathing: true, date: "2022-01-01", dangerRating: "5", description: "description", kindAmbulance:<FormSelect id="kind" onChange={e => setKind(parseInt(e.target.value))} value={kind} options={AmbulanceKind} /> , typeAmbulance:<FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} options={AmbulanceTypes} /> , accept: <Button text="---" />, refuse: <Button text="---" />},
    

  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Przyjęcie zgłoszenia</h3>
      <Table columns={cols} data={report} />
      <Button text="Wróć" onClick={e => navigate("/")} />
    </Container>
  )
}

export default AcceptReport;