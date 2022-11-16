import { useState } from "react";
import Table, { TableColumnParams } from "../../fragments/util/Table";
import FormCheck from "../../fragments/forms/FormCheck";
import { Container } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Button from "../../fragments/util/Button";

const CreateSchedule = () => {
  const [paramedics] = useState([
    { id: 1, paramedic: "Jan Nowak" }
  ]);

  const [values, setValues] = useState(() => {
    const res: boolean[] = [];

    for (let i = 0; i < 14; ++i) {
      res[i] = Math.random() > 0.5;
    }

    return res;
  });
  
  const cols: TableColumnParams<any>[] = [
    { name: "#", property: "id" },
    { name: "Ratownik", property: "paramedic" }
  ];

  const today = new Date();
  const diff = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1);
  const formatDateNumber = (x: number) => x < 10 ? `0${x}` : x.toString();

  const replace = (index: number) => {
    const tmp = [...values];
    tmp[index] = !tmp[index];
    setValues(tmp);
  };

  for (let i = 0; i < 7; ++i) {
    const date = new Date();
    date.setDate(diff + i);
    const dateString = `${formatDateNumber(date.getDate())}.${formatDateNumber(date.getMonth())}`;
    cols.push({ name: `${dateString} Zmiana 1`, property: (x: Readonly<any>) => <FormCheck value={values[i * 2]} onChange={e => replace(i * 2)} /> });
    cols.push({ name: `${dateString} Zmiana 2`, property: (x: Readonly<any>) => <FormCheck value={values[i * 2 + 1]} onChange={e => replace(i * 2 + 1)} /> });
  }

  const onSubmit = () => {};

  return (
    <Container className="mb-2 text-center">
      <Form onSubmit={onSubmit}>
        <h1>Grafik</h1>
        <Table columns={cols} data={paramedics} />
        <Button type="submit" className="mb-3 w-25">Zapisz</Button>
      </Form>
    </Container>
  );
};

export default CreateSchedule;
