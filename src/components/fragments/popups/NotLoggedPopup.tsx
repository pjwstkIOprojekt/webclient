import { Container, Row } from "react-bootstrap";
import NavButton from "../navigation/NavButton";

const NotLoggedPopup = () => {
  return (
    <Container className="mx-3 text-center">
      <Row className="mt-3">
        <p>Chcesz móc korzystać ze wszystkich możliwości naszej platformy? Zaloguj się na swoje konto już teraz!</p>
      </Row>
      <Row className="mt-3 justify-content-center">
        <NavButton className="w-50" to="/login">Zaloguj się</NavButton>
      </Row>
      <Row className="my-3 justify-content-center">
        <NavButton className="w-50" to="/register">Zarejestruj się</NavButton>
      </Row>
    </Container>
  );
};

export default NotLoggedPopup;
