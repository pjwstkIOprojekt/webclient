import { useState, useEffect } from "react";
import { AmbulanceStateResponse, getAmbulanceHistory, AmbulanceHistoryResponse } from "../../../api/ambulanceCalls";
import { useParams } from "react-router-dom";
import NavButton from "../../fragments/navigation/NavButton";
import { Container, Row, Col } from "react-bootstrap";

const AmbulanceHistory = () => {
  const [states, setStates] = useState<AmbulanceStateResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ambulanceId } = useParams();

  useEffect(() => {
    if (ambulanceId !== undefined) {
      getAmbulanceHistory(ambulanceId).then(res => res.json()).then((data: AmbulanceHistoryResponse) => {
        if (data.ambulanceHistory) {
          setStates(data.ambulanceHistory);
        }

        setIsLoading(false);
      }).catch(err => {
        console.error(err);
        setIsLoading(false);
      });
    }
  }, [ambulanceId]);

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>Historia karetki {ambulanceId}</h3>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="new">+</NavButton>
        </Col>
      </Row>
    </Container>
  );
};

export default AmbulanceHistory;
