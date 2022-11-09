import Link from "../../fragments/navigation/Link";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useState, useEffect } from "react";
import ViewLoader from "../../fragments/util/ViewLoader";
import { useTranslation } from "react-i18next";



const ScheduleList =() => {
  
  const cols = [
    { name: "#", property: "id" },
    { name: "Ratownik", property: "paramedic"},
    { name: "Od", property: "from"},
    { name: "Do", property: "to" },
    { name: "Data", property: "date" },
    
  ];

  const paramedicList = () => {
    const [paramedics, setParamedics] = useState<any[]>([
      { id: 1, paramedic: "Jan Nowak", from:"10:00",  to: "18:00", date:"09.11.2022" },
      { id: 1, paramedic: "Adam Kowalski", from:"10:00",  to: "22:00", date:"10.11.2022" },
    ]);

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h1>Grafik</h1>
      <Table columns={cols} data={paramedics} />
    </Container>
  );
};
}


export default ScheduleList;
