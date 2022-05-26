import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FormSelect from "../../fragments/FormSelect";
import Button from '../../fragments/Button';
import { getUnapproved } from "../../../apiCalls/emergencyCalls";
import { Container } from "react-bootstrap";
import Table from "../../fragments/Table";

const ambulanceTypes = ["A", "B", "C"];

const ambulanceKind = ["Covid", "Transportowa"];

const AcceptReport = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    { id: 1, victimConsious: true, victimBreathing: true, date: "2022-01-01", dangerRating: "5", description: "description" }
  ]);

  const updateData = (x: any) => {
    const index = data.findIndex(e => e.id === x.id);

    if (index < 0) {
      return;
    }

    const copy = [...data];
    copy[index] = x;
    setData(copy);
  };

  const cols = [
    { name: "#", property: "id" },
    { name: "Ofiara jest przytomna?", property: (x: any) => x.victimConsious ? "Tak" : "Nie" },
    { name: "Ofiara oddycha?", property: (x: any) => x.victimBreathing ? "Tak" : "Nie" },
    { name: "Data", property: "date" },
    { name: "Skala zagrożenia", property: "dangerRating" },
    { name: "Opis", property: (x: any) => x.description.substring(0, 100) },
    { name: "Rodzaj Karetki", property: (x: any) => <FormSelect onChange={e => updateData({...x, kind: parseInt(e.target.value)})} value={x.kind} options={ambulanceKind} /> },
    { name: "Typ Karetki", property: (x: any) => <FormSelect onChange={e => updateData({...x, type: parseInt(e.target.value)})} value={x.type} options={ambulanceTypes} /> },
    { name: "Potwierdź", property: (x: any) => <Button text="+" onClick={e => setData(data.filter(i => i.id !== x.id))} /> },
    { name: "Odrzuć", property: (x: any) => <Button text="X" onClick={e => window.confirm("Czy na pewno chcesz usunąć to zgłoszenie?") ? setData(data.filter(i => i.id !== x.id)) : null} /> },
  ];

  useEffect(() => {
    getUnapproved().then(res => res.json()).then(items => console.log(items)).catch(err => console.log(err));
  }, []);

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Przyjęcie zgłoszenia</h3>
      <Table columns={cols} data={data} />
      <Button text="Wróć" onClick={e => navigate("/")} />
    </Container>
  )
}

export default AcceptReport;
