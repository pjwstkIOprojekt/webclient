import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../fragments/Button";

const CheckIn = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={6}>
          <p>Zaktualizuj status swojego dyżuru:</p>
        </Col>
        <Col>
          <Button onClick={e => setChecked(!checked)} text={checked ? "Zakończ dyżur" : "Rozpocznij dyżur"} />
        </Col>
      </Row>
      <Row>
        <p>Może lepiej umieścić tą funkcję na pasku na górze?</p>
      </Row>
    </Container>
  );
};

export default CheckIn;
