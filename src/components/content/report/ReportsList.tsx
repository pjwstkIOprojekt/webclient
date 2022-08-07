import Link from "../../fragments/navigation/Link";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useState } from "react";
import ViewLoader from "../../fragments/util/ViewLoader";
import { getApproved } from "../../../api/emergencyCalls";

interface ReportsListParams {
  data: Record<string, any>[]
}

const ReportsListDisplay = (props: Readonly<ReportsListParams>) => {
  const cols = [
    { name: "#", property: (x: any) => <Link to={`/report/${x.id}`}>{x.id}</Link> },
    { name: "Ofiara jest przytomna?", property: (x: any) => x.victimConsious ? "Tak" : "Nie" },
    { name: "Ofiara oddycha?", property: (x: any) => x.victimBreathing ? "Tak" : "Nie" },
    { name: "Data", property: "date" },
    { name: "Skala zagrożenia", property: "dangerRating" },
    { name: "Opis", property: (x: any) => x.description.substring(0, 100) }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h1>Zgłoszenia</h1>
      <Table columns={cols} data={props.data} />
    </Container>
  );
};

const ReportsList = () => {
  const [items] = useState<any[]>([]);

  const onLoad = (loaded: () => void) => {
    loaded();
    getApproved().then(res => res.json()).then(data => {
      console.log(data);
    }).catch(err => console.log(err));
  };

  return <ViewLoader onLoad={onLoad} element={<ReportsListDisplay data={items} />} />;
};

export default ReportsList;
