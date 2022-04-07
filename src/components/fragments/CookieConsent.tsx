// Custom cookie consent component
import { useState, useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Container, Row, Col, Button } from "react-bootstrap";

interface ConsentParams {
  debug?: boolean
}

export const CookieConsent = (props: ConsentParams) => {
  const [isVisible, setIsVisible] = useState(false);
  const darkMode = useDarkMode();

  useEffect(() => {
    if (!getCookieConsentValue() || props.debug) {
      setIsVisible(true);
    }
  }, [props.debug]);

  if (!isVisible) {
    return <></>;
  }

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <Container className={`consent bg-dark-${darkMode ? "first" : "third"}`}>
      <Row className="consent-content">
        <Col className="text-light pt-2">
          Ta strona używa plików cookies. Podejmij jedyną słuszną decyzję.
        </Col>
        <Col md="auto">
          <Button variant={darkMode ? "dark-third" : "light-second"} onClick={accept}>Zgadzam się</Button>
        </Col>
        <Col md="auto">
          <Button variant={darkMode ? "dark-third" : "light-second"} onClick={accept}>Zgadzam się</Button>
        </Col>
      </Row>
    </Container>
  );
};

export const getCookieConsentValue = () => {
  return localStorage.getItem("cookieConsent") === "true";
};