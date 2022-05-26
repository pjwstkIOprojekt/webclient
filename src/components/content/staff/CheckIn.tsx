import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../fragments/Button";

const CheckIn = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container fluid className="mt-3">
        <Button onClick={(e) => setChecked(!checked)} text={checked ? "Zakończ dyżur" : "Rozpocznij dyżur"} />
    </Container>
  );
};

export default CheckIn;
