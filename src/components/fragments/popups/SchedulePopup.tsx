import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";
import NavButton from "../navigation/NavButton";
import { useState } from "react";

const SchedulePopup = () => {
  const { t } = useTranslation();
  return (
    <Container className="text-center">
      <Row className="mt-3">
        <p>Wybierz co chcesz zrobić</p>
      </Row>
      <Row className="mt-3 justify-content-center">
      <NavButton className="w-50" to="/paramedic/1">Przeglądaj</NavButton>
      </Row>
      <Row className="my-3 justify-content-center">
      <NavButton className="w-50" to="/schedule/add">Edytuj</NavButton>
      </Row>
      <Row className="my-3 justify-content-center">
      <NavButton className="w-50" to="/schedule">Usuń</NavButton>
      </Row>
    </Container>
  );
};

export default SchedulePopup;