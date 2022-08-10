import { Container, Row, Col, Card } from "react-bootstrap";
import BarChart from "../../fragments/charts/BarChart";
import CustomCard from "../../fragments/util/Card";
import Table from "../../fragments/util/Table";

const AdminHome = () => {
  const data = [
    {
      key: "Tydzień temu",
      values: {
        "Otrzymane zgłoszenia": 4,
        "Przyjęte zgłoszenia": 2
      }
    },
    {
      key: "6",
      values: {
        "Otrzymane zgłoszenia": 2,
        "Przyjęte zgłoszenia": 2
      }
    },
    {
      key: "5",
      values: {
        "Otrzymane zgłoszenia": 3,
        "Przyjęte zgłoszenia": 1
      }
    },
    {
      key: "4",
      values: {
        "Otrzymane zgłoszenia": 0,
        "Przyjęte zgłoszenia": 0
      }
    },
    {
      key: "3",
      values: {
        "Otrzymane zgłoszenia": 1,
        "Przyjęte zgłoszenia": 0
      }
    },
    {
      key: "Przedwczoraj",
      values: {
        "Otrzymane zgłoszenia": 3,
        "Przyjęte zgłoszenia": 2
      }
    },
    {
      key: "Wczoraj",
      values: {
        "Otrzymane zgłoszenia": 3,
        "Przyjęte zgłoszenia": 3
      }
    }
  ];

  const chartConfig = [
    {
      key: "Otrzymane zgłoszenia",
      stroke: "#4caf50",
      fill: "#4caf50"
    },
    {
      key: "Przyjęte zgłoszenia",
      stroke: "#d6a923",
      fill: "#d6a923"
    }
  ];

  const tableData = [
    {
      date: "2022-07-19 18:00",
      cause: "Wypadek samochodowy",
      scale: 2
    },
    {
      date: "2022-07-12 16:53",
      cause: "Atak terrorystyczny",
      scale: 4
    }
  ];

  const cols = [
    {
      name: "Data zgłoszenia",
      property: "date",
      sortBy: "date",
      filterBy: "date"
    },
    {
      name: "Rodzaj zgłoszenia",
      property: "cause",
      sortBy: "cause",
      filterBy: "cause"
    },
    {
      name: "Skala zagrożenia",
      property: "scale",
      sortBy: "scale",
      filterBy: "scale"
    }
  ];

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1 className="mb-3">Panel główny</h1>
      <Row>
        <Col>
          <BarChart width={750} height={600} settings={chartConfig} data={data} grid tooltip legend />
        </Col>
        <Col>
          <CustomCard>
            <Card.Header>
              <h2>Witaj ponownie!</h2>
            </Card.Header>
            <Card.Img src="/img/thumbnail.jpg" />
            <p>Od czasu, kiedy się ostatnio zalogowałeś/aś pojawiły się <b>2 nowe zgłoszenia</b>!</p>
          </CustomCard>
        </Col>
      </Row>
      <Row className="mt-3">
        <Table columns={cols} data={tableData} />
      </Row>
    </Container>
  );
};

export default AdminHome;
