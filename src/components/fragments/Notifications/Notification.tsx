import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const Notification = () => {
  const [show, setShow] = useState<boolean>(true)
  
  const toggleShow = () => setShow(!show)

  return (
    <Toast show={show} onClose={toggleShow}>
      <Toast.Header>
        <strong className="me-auto">Zgłoszenie</strong>
        <small className="text-muted">2 minutes ago</small>
      </Toast.Header>
      <Toast.Body>Kliknij aby przejść do zgłoszenia</Toast.Body>
    </Toast>
  );
};

export default Notification;
