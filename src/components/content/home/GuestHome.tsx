import { useRoles } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { isAuth } from "../../../helpers/authHelper";
import NavButton from "../../fragments/navigation/NavButton";
import { useTranslation } from "react-i18next";

const GuestHome = () => {
  const roles = useRoles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1>{t('SaveLife')}</h1>
      <h2>{t('Welcome')}</h2>
      <h3>{t('SeeAccident')}</h3>
      <NavButton to={isAuth(roles) ? "/newreport" : "/login"}>{t('CallIncident')}</NavButton>
      <Row className="mt-5">
        <Col>
          <img src="/img/thumbnail.jpg" alt="Obraz 1" />
        </Col>
        <Col>
          <h3 className="my-5">{t('GARY')}</h3>
          <p>{t('CreateAccount')}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img src="/img/thumbnail.jpg" alt="Obraz 2" />
        </Col>
        <Col>
          <h3 className="my-5">{t('ReportAccidentAnywhere')}</h3>
          <p>{t('ReportAccidentFromApp')}</p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <img src="/img/thumbnail.jpg" alt="Obraz 3" />
        </Col>
        <Col>
          <h3 className="my-5">{t('GiveHelp')}</h3>
          <p>{t('WatchTutorials')}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestHome;
