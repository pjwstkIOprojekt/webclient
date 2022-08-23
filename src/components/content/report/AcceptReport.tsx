import { useState, useEffect } from "react";
import FormSelect from "../../fragments/forms/FormSelect";
import Link from "../../fragments/navigation/Link";
import Button from '../../fragments/util/Button';
import { getUnapproved, getApproved } from "../../../api/emergencyCalls";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const AcceptReport = () => {
  const [pending, setPending] = useState([
    { id: 1, victimConsious: true, victimBreathing: true, date: "2022-01-01", dangerRating: "5", description: "description" }
  ]);

  const [approved, setApproved] = useState([
    { id: 3, victimConsious: false, victimBreathing: true, date: "2022-03-29", dangerRating: "3", description: "wypadek" }
  ]);

  const sharedCols = [
    { name: "#", property: (x: any) => <Link to={`${x.id}`}>{x.id}</Link>, filterBy: "id", sortBy: "id" },
    { name: "Ofiara jest przytomna?", property: (x: any) => x.victimConsious ? "Tak" : "Nie" },
    { name: "Ofiara oddycha?", property: (x: any) => x.victimBreathing ? "Tak" : "Nie" },
    { name: "Data", property: "date", filterBy: "date", sortBy: "date" },
    { name: "Skala zagrożenia", property: "dangerRating", filterBy: "dangerRating", sortBy: "dangerRating" },
    { name: "Opis", property: (x: any) => x.description.substring(0, 100), filterBy: "description", sortBy: "description" }
  ];

  const approve = (x: any) => {
    setPending(pending.filter(i => i.id !== x.id));
    setApproved([...approved, x]);
  };

  const pendingCols = [
    ...sharedCols,
    { name: "Przypisana karetka", property: () => <FormSelect options={["-- Wybierz karetkę --"]} />},
    { name: "Potwierdź", property: (x: any) => <Button onClick={e => window.confirm("Czy na pewno chcesz zaakceptować to zgłoszenie?") ? approve(x) : null}>+</Button> },
    { name: "Odrzuć", property: (x: any) => <Button onClick={e => window.confirm("Czy na pewno chcesz usunąć to zgłoszenie?") ? setPending(pending.filter(i => i.id !== x.id)) : null}>X</Button> },
  ];

  const approvedCols = [
    ...sharedCols,
    { name: "Przypisana karetka", property: "ambulance" }
  ];

  useEffect(() => {
    getUnapproved().then(res => res.json()).then(items => console.log(items)).catch(err => console.log(err));
    getApproved().then(res => res.json()).then(items => console.log(items)).catch(err => console.log(err));
  }, []);

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Oczekujące zgłoszenia</h3>
      <Table columns={pendingCols} data={pending} />
      <h3 className="mt-5">Przyjęte zgłoszenia</h3>
      <Table columns={approvedCols} data={approved} />
    </Container>
  );
};

export default AcceptReport;
