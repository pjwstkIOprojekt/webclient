import { Container, Row } from "react-bootstrap";
import ProgressChart from "../../fragments/charts/ProgressChart";
import PieChart from "../../fragments/charts/PieChart";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";

const DispositorHome = () => {
  const tableData = [
    { date: "2022-07-19 18:00", cause: "Wypadek samochodowy", scale: 2 },
    { date: "2022-07-12 16:53", cause: "Atak terrorystyczny", scale: 4 }
  ];

  const cols = [
    { name: "Data zgłoszenia", property: "date", sortBy: "date", filterBy: "date", size: 12 },
    { name: "Rodzaj zgłoszenia", property: "cause", sortBy: "cause", filterBy: "cause" },
    { name: "Skala zagrożenia", property: "scale", sortBy: "scale", filterBy: "scale", size: 12 }
  ];

  const data = [
    { name: "Wypadki", value: 4, fill: "#bbbb00", fillDark: "#5dbf62" },
    { name: "Ataki terrorystyczne", value: 1, fill: "#5dbf62", fillDark: "#c59812" },
    { name: "Ogniska Covid", value: 3, fill: "#343489", fillDark: "#aaaa00" }
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-3 text-center">Panel główny</h1>
      <Row xs={4} className="justify-content-around">
        <ProgressChart width={350} height={350} value={43} innerRadius="100" color={{
          r: 255,
          g: 162,
          b: 0
        }} />
        <PieChart width={350} height={350} data={data} innerRadius="90" legend tooltip />
        <ProgressChart width={350} height={350} value={79} innerRadius="100" label color={{
          r: 0,
          g: 146,
          b: 255
        }} />
      </Row>
      <Row xs={3} className="text-center">
        <h3>Dostępne karetki</h3>
        <h3>Zdarzenia</h3>
        <h3>Przyjęte zgłoszenia</h3>
      </Row>
      <Row className="mt-5 justify-content-center">
        <NavButton to="/map" className="w-25">Otwórz mapę</NavButton>
      </Row>
      <Row className="my-5">
        <Table columns={cols} data={tableData} />
      </Row>
    </Container>
  );
};

export default DispositorHome;
