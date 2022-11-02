import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import NavButton from "../navigation/NavButton";

const NotLoggedPopup = () => {
  const { t } = useTranslation("jezyk");
  return (
    <Container className="mx-3 text-center">
      <Row className="mt-3">
        <p>{t('AllCapabilities')}</p>
      </Row>
      <Row className="mt-3 justify-content-center">
        <NavButton className="w-50" to="/login">{t('Sign in')}</NavButton>
      </Row>
      <Row className="my-3 justify-content-center">
        <NavButton className="w-50" to="/register">{t('Sign up')}</NavButton>
      </Row>
    </Container>
  );
};

export default NotLoggedPopup;
