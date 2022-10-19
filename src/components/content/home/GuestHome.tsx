import { useRoles } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { isAuth } from "../../../helpers/authHelper";
import NavButton from "../../fragments/navigation/NavButton";

const GuestHome = () => {
  const roles = useRoles();
  const navigate = useNavigate();

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1>Pomóż nam ratować ludzkie życia już teraz!</h1>
      <h2>Witamy w GARY, w nowym najlepszym przyjacielu człowieka.</h2>
      <h3>Widzisz wypadek? Zareaguj już teraz!</h3>
      <NavButton to={isAuth(roles) ? "/newreport" : "/login"}>Zgłoś zdarzenie</NavButton>
      <Row className="mt-5">
        <Col>
          <img src="/img/thumbnail.jpg" alt="Obraz 1" />
        </Col>
        <Col>
          <h3 className="my-5">GARY to Twój nowy najlepszy przyjaciel</h3>
          <p>Założenie konta jest proste i trwa tylko kilka minut, a dostęp do aplikacji może uratować Twoje życie.</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img src="/img/thumbnail.jpg" alt="Obraz 2" />
        </Col>
        <Col>
          <h3 className="my-5">Zgłoś zdarzenie z dowolnego miejsca</h3>
          <p>Możesz zgłosić wypadek, atak terrorystyczny lub inne zdarzenie w dowolnym miejscu przez przeglądarkę lub aplikację mobilną.</p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <img src="/img/thumbnail.jpg" alt="Obraz 3" />
        </Col>
        <Col>
          <h3 className="my-5">Udziel pierwszej pomocy</h3>
          <p>Przeglądaj liczne poradniki udzielania pierwszej pomocy i wykorzystaj nabytą wiedzę, żeby uratować czyjeś życie.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestHome;
