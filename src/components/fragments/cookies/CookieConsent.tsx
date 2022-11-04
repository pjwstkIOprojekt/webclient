// Custom cookie consent component
import { useState, useEffect } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { getCookieConsentValue, acceptCookies } from "../../../helpers/cookieHelper";
import { Container, Row, Col } from "react-bootstrap";
import { customVar } from "../sharedParams";
import Button from "../util/Button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const darkMode = useDarkMode();

  useEffect(() => {
    if (!getCookieConsentValue()) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) {
    return <></>;
  }

  const accept = () => {
    acceptCookies();
    setIsVisible(false);
  };

  return (
    <Container className={`consent bg-${customVar(darkMode)}`}>
      <Row className="consent-content">
        <Col className="pt-2">
          Ta strona używa plików cookies. Podejmij jedyną słuszną decyzję.
        </Col>
        <Col md="auto">
          <Button onClick={accept}>Zgadzam się</Button>
        </Col>
        <Col md="auto">
          <Button onClick={accept}>Zgadzam się</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CookieConsent;
