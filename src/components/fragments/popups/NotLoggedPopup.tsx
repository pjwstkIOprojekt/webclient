import { useNotificationsManager } from "../../../hooks/useNotify";
import { useNavigate } from "react-router-dom";
import { keycloakClient } from "../../../helpers/authHelper";
import { Container, Row } from "react-bootstrap";
import Button from "../util/Button";

const NotLoggedPopup = () => {
  const notifications = useNotificationsManager();
  const navigate = useNavigate();

  const handleLogin = () => {
    notifications.clear();
    keycloakClient.login();
  };

  return (
    <Container className="mx-3">
      <Row className="mt-3">
        <p className="text-center">Chcesz móc korzystać ze wszystkich możliwości naszej platformy? Zaloguj się na swoje konto już teraz!</p>
      </Row>
      <Row className="justify-content-center mt-3">
        <Button type="button" className="w-50" onClick={handleLogin}>Zaloguj się</Button>
      </Row>
      <Row className="justify-content-center my-3">
        <Button type="button" className="w-50" onClick={() => navigate("/register")}>Zarejestruj się</Button>
      </Row>
    </Container>
  );
};

export default NotLoggedPopup;
