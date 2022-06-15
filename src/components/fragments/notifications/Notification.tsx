import { useState } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Toast } from "react-bootstrap";

const Notification = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  const darkMode = useDarkMode();

  return (
    <Toast show={show} onClose={toggleShow} bg={darkMode ? "dark" : "light"}>
      <Toast.Header className={`toast-header-custom-${darkMode ? "dark" : "light"}`} closeVariant={darkMode ? "white" : undefined}>
        <strong className="me-auto">Zgłoszenie</strong>
        <small>2 minutes ago</small>
      </Toast.Header>
      <Toast.Body>Kliknij aby przejść do zgłoszenia</Toast.Body>
    </Toast>
  );
};

export default Notification;
