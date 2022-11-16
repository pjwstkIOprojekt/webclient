import { useState } from "react";
import Table, { TableColumnParams } from "../../fragments/util/Table";
import FormCheck from "../../fragments/forms/FormCheck";
import { Container } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";

const ScheduleList = () => {
  const [paramedics] = useState([
    { id: 1, paramedic: "Jan Nowak" },
    { id: 2, paramedic: "Adam Kowalski", }
  ]);
 
  const cols: TableColumnParams<any>[] = [
    { name: "#", property: "id" },
    { name: "Ratownik", property: "paramedic" }
  ];

  const today = new Date();
  const diff = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1);
  const formatDateNumber = (x: number) => x < 10 ? `0${x}` : x.toString();

  for (let i = 0; i < 7; ++i) {
    const date = new Date();
    date.setDate(diff + i);
    const dateString = `${formatDateNumber(date.getDate())}.${formatDateNumber(date.getMonth())}`;
    const val = Math.random() > 0.5;
    cols.push({ name: `${dateString} Zmiana 1`, property: (x: Readonly<any>) => <FormCheck value={val} disabled /> });
    cols.push({ name: `${dateString} Zmiana 2`, property: (x: Readonly<any>) => <FormCheck value={!val} disabled /> });
  }

  return (
    <Container className="mb-2 text-center">
      <h1>Grafik</h1>
      <Table columns={cols} data={paramedics} />
      <NavButton className="mb-3 w-25" to="edit">Edytuj</NavButton>
    </Container>
  );
};

export default ScheduleList;
