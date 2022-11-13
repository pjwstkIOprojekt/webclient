import { useRoles } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import { isAuth } from "../../../helpers/authHelper";

const GuestHome = () => {
  const roles = useRoles();
  const { t } = useTranslation();

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1>{t("MainPage.SaveLife")}</h1>
      <h2>{t("MainPage.Welcome")}</h2>
      <h3>{t("MainPage.SeeAccident")}</h3>
      <NavButton to={isAuth(roles) ? "/newreport" : "/login"}>{t("MainPage.CallIncident")}</NavButton>
      <Row className="mt-5">
        <Col>
          <img src="/img/blood.png" alt="Obraz 1" className="home-img" />
        </Col>
        <Col>
          <h3 className="my-5">GARY</h3>
          <p>{t("MainPage.CreateAccount")}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img src="/img/ambulance.png" alt="Obraz 2" className="home-img" />
        </Col>
        <Col>
          <h3 className="my-5">{t("MainPage.ReportAccidentAnywhere")}</h3>
          <p>{t("MainPage.ReportAccidentFromApp")}</p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <img src="/img/health.png" alt="Obraz 3" className="home-img" />
        </Col>
        <Col>
          <h3 className="my-5">{t("MainPage.GiveHelp")}</h3>
          <p>{t("MainPage.WatchTutorials")}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestHome;
