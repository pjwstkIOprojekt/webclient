import Link from "../../fragments/navigation/Link";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useState, useEffect } from "react";
import ViewLoader from "../../fragments/util/ViewLoader";

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

  useEffect(() => {
    /*getApproved().then(res => res.json()).then(data => {
      console.log(data);
    }).catch(err => console.log(err));*/
  }, []);

  return <ViewLoader isLoaded={items.length > 0} element={<ReportsListDisplay data={items} />} />;
};

export default ReportsList;
