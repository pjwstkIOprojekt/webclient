import { useState, useEffect } from "react";
import { getAmbulanceHistory, AmbulanceHistoryResponse } from "../../../api/ambulanceCalls";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { licensePlateError } from "../sharedStrings";
import Enum from "../../fragments/values/Enum";
import { AmbulanceState } from "../../../api/enumCalls";
import DateDisplay from "../../fragments/values/DateDisplay";
import { Container, Row, Col } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";

interface StoredState {
  type: string,
  start: Date,
  end: Date
}

const AmbulanceHistory = () => {
  const [states, setStates] = useState<StoredState[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ambulanceId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }
    
    getAmbulanceHistory(ambulanceId).then(res => res.json()).then((data: AmbulanceHistoryResponse) => {
      if (data.ambulanceHistory) {
        setStates(data.ambulanceHistory.map(s => ({
          type: s.type,
          start: new Date(s.timeWindow["start"]),
          end: new Date(s.timeWindow["end"])
        })));
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, [ambulanceId]);

  const cols = [
    { name: t("Ambulance.State"), property: (x: Readonly<StoredState>) => <Enum enum={AmbulanceState} value={x.type} />, filterBy: "type", sortBy: "type" },
    { name: t("From"), property: (x: Readonly<StoredState>) => <DateDisplay value={x.start} />, filterBy: "start", sortBy: "start" },
    { name: t("To"), property: (x: Readonly<StoredState>) => <DateDisplay value={x.end} />, filterBy: "end", sortBy: "end" }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>{t("Ambulance.History")} {ambulanceId}</h3>
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
