import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ReportForm from "./ReportForm";

const Report = () => {
  return (
    <Container fluid className="mt-3">
      <h1>Zgłoszenie</h1>
      <Container fluid className="mt-3">
        <Row>
          <Col md={4} className="mb-3">
            <ListGroup>
              <ListGroup.Item>
                <p className="fw-bold">Typ: </p>
                <p>Wypadek samochodowy</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="fw-bold">Liczba poszkodowanych: </p>
                <p>3</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="fw-bold">Lokalizacja: </p>
                <p>Warszawa, ul. ABC 1</p>
                <p className="text-muted">Zobacz na mapie</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="fw-bold">Czy oddycha? </p>
                <p>Tak</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="fw-bold">Czy przytomny? </p>
                <p>Nie</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="fw-bold">Opis:</p>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum."
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ReportForm link="../reports" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Report;
