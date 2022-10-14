import { useNotificationsManager } from "../../../hooks/useNotify";
import { Container, Row } from "react-bootstrap";
import Button from "../util/Button";
import NavButton from "../navigation/NavButton";

const NotLoggedPopup = () => {
  const notifications = useNotificationsManager();

  const handleLogin = () => {
    notifications.clear();
  };

  return (
    <Container className="mx-3 text-center">
      <Row className="mt-3">
        <p>Chcesz móc korzystać ze wszystkich możliwości naszej platformy? Zaloguj się na swoje konto już teraz!</p>
      </Row>
      <Row className="mt-3 justify-content-center">
        <Button type="button" className="w-50" onClick={handleLogin}>Zaloguj się</Button>
      </Row>
      <Row className="my-3 justify-content-center">
        <NavButton className="w-50" to="/register">Zarejestruj się</NavButton>
      </Row>
    </Container>
  );
};

export default NotLoggedPopup;
