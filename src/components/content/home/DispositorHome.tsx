import { Container, Row } from "react-bootstrap";
import StatsCircle from "../../fragments/util/StatsCircle";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";

const DispositorHome = () => {
  const tableData = [
    { date: "2022-07-19 18:00", cause: "Wypadek samochodowy", scale: 2 },
    { date: "2022-07-12 16:53", cause: "Atak terrorystyczny", scale: 4 }
  ];

  const cols = [
    { name: "Data zgłoszenia", property: "date", sortBy: "date", filterBy: "date" },
    { name: "Rodzaj zgłoszenia", property: "cause", sortBy: "cause", filterBy: "cause" },
    { name: "Skala zagrożenia", property: "scale", sortBy: "scale", filterBy: "scale" }
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-3 text-center">Panel główny</h1>
      <h2 className="mb-3 text-center">Dzisiejsze zgłoszenia</h2>
      <Row xs={4} className="justify-content-around">
        <StatsCircle value={4} name="Wypadki" />
        <StatsCircle value={0} name="Ataki terrorystyczne" />
        <StatsCircle value={3} name="Ogniska Covid" />
        <StatsCircle value={1} name="Pożary" />
      </Row>
      <Row className="mt-5 justify-content-center">
        <NavButton to="/map" className="w-25">Otwórz mapę</NavButton>
      </Row>
      <Row className="mt-3">
        <Table columns={cols} data={tableData} />
      </Row>
    </Container>
  );
};

export default DispositorHome;
