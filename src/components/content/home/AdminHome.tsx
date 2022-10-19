import NavButton from "../../fragments/navigation/NavButton";
import { Container, Row, Card } from "react-bootstrap";
import CustomCard from "../../fragments/util/Card";
import PieChart from "../../fragments/charts/PieChart";
import Table from "../../fragments/util/Table";

const AdminHome = () => {
  const data = [
    { id: 1, name: "Karetka T", accident: 1, status: "Dojeżdża", color: "#ff0000" },
    { id: 2, name: "Karetka R", accident: 1, status: "Dojeżdża", color: "#ff0000" },
    { id: 3, name: "Karetka R", accident: 2, status: "Na miejscu", color: "#0000ff" },
    { id: 4, name: "Karetka Covid", accident: 3, status: "Wraca", color: "#00ff00" }
  ];

  const cols = [
    { name: "#", property: "id", sortBy: "id", filterBy: "id", size: 10 },
    { name: "Karetka", property: "name", sortBy: "name", filterBy: "name" },
    { name: "Wyposażenie", property: (x: Record<string, any>) => <NavButton to={`/admpanel/ambulances/equipment/${x.id}`}>Zobacz</NavButton>, size: 12 },
    { name: "Zgłoszenie", property: (x: Record<string, any>) => <NavButton to={`/admpanel/reports/${x.accident}`}>Zobacz</NavButton>, sortBy: "accident", filterBy: "accident", size: 12 },
    { name: "Status", property: (x: Record<string, any>) => <span style={{ color: x.color }}>{x.status}</span>, filterBy: "status", sortBy: "status", size: 20 }
  ];

  const pieDat = [
    { name: "Ratownicy w akcji", value: 4, fill: "#bbbb00", fillDark: "#5dbf62" },
    { name: "Ratownicy w gotowości", value: 24, fill: "#5dbf62", fillDark: "#c59812" },
    { name: "Ratownicy nieaktywni", value: 11, fill: "#343489", fillDark: "#aaaa00" }
  ];

  const pieDat2 = [
    { name: "Wypadki", value: 4, fill: "#bbbb00", fillDark: "#5dbf62" },
    { name: "Ataki terrorystyczne", value: 0, fill: "#5dbf62", fillDark: "#c59812" },
    { name: "Ogniska Covid", value: 3, fill: "#343489", fillDark: "#aaaa00" },
    { name: "Pożary", value: 1, fill: "#000000", fillDark: "#cc4444" }
  ];

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1 className="mb-3">Panel główny</h1>
      <Row xs={2}>
        <CustomCard>
          <Card.Header>
            <Card.Title>Aktualny stan personelu</Card.Title>
          </Card.Header>
          <Card.Body>
            <PieChart width={500} height={600} data={pieDat} label legend tooltip />
          </Card.Body>
        </CustomCard>
        <CustomCard>
          <Card.Header>
            <Card.Title>Raport z ostatnich 24 godzin</Card.Title>
          </Card.Header>
          <Card.Body>
            <PieChart width={500} height={600} data={pieDat2} label legend tooltip />
          </Card.Body>
        </CustomCard>
      </Row>
      <h2 className="mt-5 mb-3">Karetki aktualnie biorące udział w zgłoszeniach</h2>
      <Table columns={cols} data={data} />
    </Container>
  );
};

export default AdminHome;
