import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { isAuth } from "../../../helpers/authHelper";
import Button from "../../fragments/util/Button";

const GuestHome = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1>Pomóż nam ratować ludzkie życia już teraz!</h1>
      <h2>Witamy w GARY, w nowym najlepszym przyjacielu człowieka.</h2>
      <h3>Widzisz wypadek? Zareaguj już teraz!</h3>
      <Button onClick={isAuth() ? () => navigate("/newreport") : () => navigate("/register")}>Zgłoś zdarzenie</Button>
      <Row className="mt-3">
        <Col>
          <img src="/img/thumbnail.jpg" />
        </Col>
        <Col>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img src="/img/thumbnail.jpg" />
        </Col>
        <Col>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <img src="/img/thumbnail.jpg" />
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestHome;
