import Link from "../../fragments/Link";
import { useState, useEffect } from "react";
import { AccidentReport } from "../../.././helpers/apiTypes";
import { getReports } from "../../../apiCalls/accidentReportCalls";
import { Container } from "react-bootstrap";
import Table from "../../fragments/Table";

const cols = [
  { name: "#", property: "id", func: (x: any) => <Link to={`/report/${x}`}>{x}</Link> },
  { name: "Ofiara jest przytomna?", property: "victimConsious", func: (x: boolean) => x ? "Tak" : "Nie" },
  { name: "Ofiara oddycha?", property: "victimBreathing", func: (x: boolean) => x ? "Tak" : "Nie" },
  { name: "Data", property: "date" },
  { name: "Skala zagrożenia", property: "dangerRating" },
  { name: "Opis", property: "description", func: (x: string) => x.substring(0, 100) }
];

const ReportsList = () => {
  const [items, setItems] = useState<AccidentReport[]>([]);

  useEffect(() => {
    getReports().then(res => res.json()).then(data => {
      console.log(data);
      setItems(data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h1>Zgłoszenia</h1>
      <Table columns={cols} data={items} />
    </Container>
  );
};

export default ReportsList;
