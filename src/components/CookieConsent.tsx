// Custom cookie consent component
import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./fragments/Button";

interface ConsentParams {
  debug?: boolean
}

export const CookieConsent = (props: Readonly<ConsentParams>) => {
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
    <Container className={`consent bg-custom-${darkMode ? "dark" : "light"}`}>
      <Row className="consent-content">
        <Col className="pt-2">
          Ta strona używa plików cookies. Podejmij jedyną słuszną decyzję.
        </Col>
        <Col md="auto">
          <Button onClick={accept} text="Zgadzam się" />
        </Col>
        <Col md="auto">
          <Button onClick={accept} text="Zgadzam się" />
        </Col>
      </Row>
    </Container>
  );
};

export const getCookieConsentValue = () => {
  return localStorage.getItem("cookieConsent") === "true";
};
