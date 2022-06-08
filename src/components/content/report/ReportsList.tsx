import Link from "../../fragments/navigation/Link";
import { useState, useEffect } from "react";
import { getApproved } from "../../../apiCalls/emergencyCalls";
import { Container } from "react-bootstrap";
import Spinner from "../../fragments/util/Spinner";
import Table from "../../fragments/util/Table";

const cols = [
  { name: "#", property: (x: any) => <Link to={`/report/${x.id}`}>{x.id}</Link> },
  { name: "Ofiara jest przytomna?", property: (x: any) => x.victimConsious ? "Tak" : "Nie" },
  { name: "Ofiara oddycha?", property: (x: any) => x.victimBreathing ? "Tak" : "Nie" },
  { name: "Data", property: "date" },
  { name: "Skala zagrożenia", property: "dangerRating" },
  { name: "Opis", property: (x: any) => x.description.substring(0, 100) }
];

const ReportsList = () => {
  const [items, setItems] = useState<any[]>([
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getApproved().then(res => res.json()).then(data => {
      console.log(data);
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
