import Link from "../../fragments/Link";
import { useState, useEffect } from "react";
import { AccidentReport } from "../../.././helpers/apiTypes";
import { getReports } from "../../../apiCalls/accidentReportCalls";
import { Container } from "react-bootstrap";
import Table from "../../fragments/Table";

const cols = [
  { name: "#", property: (x: any) => <Link to={`/report/${x.id}`}>{x.id}</Link> },
  { name: "Ofiara jest przytomna?", property: (x: any) => x.victimConsious ? "Tak" : "Nie" },
  { name: "Ofiara oddycha?", property: (x: any) => x.victimBreathing ? "Tak" : "Nie" },
  { name: "Data", property: "date" },
  { name: "Skala zagrożenia", property: "dangerRating" },
  { name: "Opis", property: (x: any) => x.description.substring(0, 100) }
];

const ReportsList = () => {
  const [items, setItems] = useState<AccidentReport[]>([]);

  useEffect(() => {
    getReports().then(res => res.json()).then(data => {
      //setItems(data);
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
