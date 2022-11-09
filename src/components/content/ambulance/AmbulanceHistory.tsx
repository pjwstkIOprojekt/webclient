import { useState, useEffect } from "react";
import { AmbulanceStateResponse, getAmbulanceHistory, AmbulanceHistoryResponse } from "../../../api/ambulanceCalls";
import { useParams } from "react-router-dom";
import Enum from "../../fragments/util/Enum";
import { AmbulanceState } from "../../../api/enumCalls";
import { Container, Row, Col } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";
import { useTranslation } from "react-i18next";

const AmbulanceHistory = () => {
  const [states, setStates] = useState<AmbulanceStateResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ambulanceId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (ambulanceId === undefined) {
      console.error(t('Ambulance.License'));
      return;
    }
    
    getAmbulanceHistory(ambulanceId).then(res => res.json()).then((data: AmbulanceHistoryResponse) => {
      if (data.ambulanceHistory) {
        setStates(data.ambulanceHistory);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, [ambulanceId]);

  const cols = [
    { name: t('Ambulance.State'), property: (x: Readonly<AmbulanceStateResponse>) => <Enum enum={AmbulanceState} value={x.type} />, filterBy: "type", sortBy: "type" },
    { name: t('From'), property: "timeWindow.start", filterBy: "timeWindow.start", sortBy: "timeWindow.start" },
    { name: t('To'), property: "timeWindow.end", filterBy: "timeWindow.end", sortBy: "timeWindow.end" }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>{t('Ambulance.History')} {ambulanceId}</h3>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to={`../ambulances/state/${ambulanceId}`}>+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={states} isLoading={isLoading} />
    </Container>
  );
};

export default AmbulanceHistory;
