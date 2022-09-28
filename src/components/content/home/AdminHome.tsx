import NavButton from "../../fragments/navigation/NavButton";
import { Container, Row, Col, Card } from "react-bootstrap";
import CustomCard from "../../fragments/util/Card";
import PieChart from "../../fragments/charts/PieChart";
import LineChart, { LineChartSetting } from "../../fragments/charts/LineChart";
import Table from "../../fragments/util/Table";

const AdminHome = () => {
  const data = [
    { id: 1, name: "Karetka T", equipment: "", accident: 1 },
    { id: 2, name: "Karetka R", equipment: "", accident: 1 },
    { id: 3, name: "Karetka R", equipment: "", accident: 2 },
    { id: 4, name: "Karetka Covid", equipment: "", accident: 3 }
  ];

  const cols = [
    { name: "#", property: "id", sortBy: "id", filterBy: "id" },
    { name: "Karetka", property: "name", sortBy: "name", filterBy: "name" },
    { name: "Wyposażenie", property: "equipment" },
    { name: "Zgłoszenie", property: (x: Record<string, any>) => <NavButton to={`${x.accident}`}>Zobacz</NavButton>, sortBy: "accident", filterBy: "accident" }
  ];

  const pieDat = [
    { name: "Ratownicy w akcji", value: 4, fill: "#898934" },
    { name: "Ratownicy w gotowości", value: 24, fill: "#893434" },
    { name: "Ratownicy nieaktywni", value: 11, fill: "#343489" }
  ];

  const lineDat = [
    {
      key: "24h",
      values: {
        "Wypadki": 0,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 0
      }
    },
    {
      key: "22h",
      values: {
        "Wypadki": 0,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 0
      }
    },
    {
      key: "20h",
      values: {
        "Wypadki": 2,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 0
      }
    },
    {
      key: "18h",
      values: {
        "Wypadki": 1,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 0
      }
    },
    {
      key: "16h",
      values: {
        "Wypadki": 4,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 0
      }
    },
    {
      key: "14h",
      values: {
        "Wypadki": 2,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 1
      }
    },
    {
      key: "12h",
      values: {
        "Wypadki": 0,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 1
      }
    },
    {
      key: "10h",
      values: {
        "Wypadki": 2,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 2
      }
    },
    {
      key: "8h",
      values: {
        "Wypadki": 1,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 4
      }
    },
    {
      key: "6h",
      values: {
        "Wypadki": 3,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 4
      }
    },
    {
      key: "4h",
      values: {
        "Wypadki": 6,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 5
      }
    },
    {
      key: "2h",
      values: {
        "Wypadki": 0,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 2
      }
    },
    {
      key: "Teraz",
      values: {
        "Wypadki": 0,
        "Ataki terrorystyczne": 0,
        "Ogniska Covid": 0
      }
    },
  ];

  const lineSet: LineChartSetting[] = [
    { key: "Wypadki", stroke: "#898934", type: "monotone" },
    { key: "Ataki terrorystyczne", stroke: "#893434", type: "monotone" },
    { key: "Ogniska Covid", stroke: "#343489", type: "monotone" }
  ];

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1 className="mb-3">Panel główny</h1>
      <Row>
        <Col>
          <CustomCard>
            <Card.Header>
              <Card.Title>Aktualny stan personelu</Card.Title>
            </Card.Header>
            <Card.Body>
              <PieChart width={500} height={600} data={pieDat} label legend tooltip />
            </Card.Body>
          </CustomCard>
        </Col>
        <Col>
          <CustomCard>
            <Card.Header>
              <Card.Title>Raport z ostatnich 24 godzin</Card.Title>
            </Card.Header>
            <Card.Body>
              <LineChart width={500} height={600} data={lineDat} settings={lineSet} legend tooltip />
            </Card.Body>
          </CustomCard>
        </Col>
      </Row>
      <h2 className="mt-5 mb-3">Karetki aktualnie biorące udział w zgłoszeniach</h2>
      <Table columns={cols} data={data} />
    </Container>
  );
};

export default AdminHome;
