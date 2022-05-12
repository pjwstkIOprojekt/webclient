import { useNavigate } from "react-router-dom";
import Table from "../../fragments/Table";
import Button from '../../fragments/Button';
import { Container } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import { useState } from "react";

const AmbulanceTypes = ["A", "B", "C"];

const AmbulanceKind = ["Covid","Transportowa"];

const AcceptReport = () => {
  const navigate = useNavigate();
  const [type, setType] = useState(0);
  const [kind, setKind] = useState(0);

  const cols = [
    { name: "#", property: "id" },
    { name: "Ofiara jest przytomna?", property: (x: any) => x.victimConsious ? "Tak" : "Nie" },
    { name: "Ofiara oddycha?", property: (x: any) => x.victimBreathing ? "Tak" : "Nie" },
    { name: "Data", property: "date" },
    { name: "Skala zagrożenia", property: "dangerRating" },
    { name: "Opis", property: (x: any) => x.description.substring(0, 100) },
    { name: "Rodzaj Karetki", property: (x: any) => <FormSelect id="kind" onChange={e => setKind(parseInt(e.target.value))} value={kind} options={AmbulanceKind} /> },
    { name: "Typ Karetki", property: (x: any) => <FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} options={AmbulanceTypes} /> },
    { name: "Potwierdź", property: (x: any) => <Button text="---" /> },
    { name: "Odrzuć", property: (x: any) => <Button text="---" /> },
  ];

  const report = [
    { id: 1, victimConsious: true, victimBreathing: true, date: "2022-01-01", dangerRating: "5", description: "description" },
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
