import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePopup } from "../../../hooks/usePopup";
import { IncidentResponse, getIncidents, deleteIncident } from "../../../api/incidentCalls";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import { AmbulanceType } from "../../../api/enumCalls";
import NavButton from "../../fragments/navigation/NavButton";
import Button from "../../fragments/util/Button";
import ConfirmPopup from "../../fragments/popups/ConfirmPopup";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const IncidentsList = () => {
  const [incidents, setIncidents] = useState<IncidentResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const popup = usePopup();

  useEffect(() => {
    getIncidents().then(res => res.json()).then((data: IncidentResponse[]) => {
      if (data) {
        setIncidents(data);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const remove = (id: number) => {
    setIncidents(incidents.filter(i => i.incidentId !== id));
    deleteIncident(id);
  };

  const cols = [
    { name: "#", property: (x: Readonly<IncidentResponse>) => <Link to={`edit/${x.incidentId}`}>{x.incidentId}</Link>, sortBy: "dangerScale", filterBy: "incidentId" },
    { name: t("Incident.Scale"), property: "dangerScale", sortBy: "dangerScale", filterBy: "dangerScale" },
    { name: t("Incident.Type"), property: (x: Readonly<IncidentResponse>) => <Enum enum={AmbulanceType} value={x.incidentStatusType} />, sortBy: "incidentStatusType", filterBy: "incidentStatusType" },
    { name: t("Incident.Just"), property: "reactionJustification", sortBy: "reactionJustification", filterBy: "reactionJustification" },
    { name: t("Common.Remove"), property: (x: Readonly<IncidentResponse>) => <Button onClick={e => popup(<ConfirmPopup text="Incident.ConfirmRemove" onConfirm={() => remove(x.incidentId)} />)}>X</Button> }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>{t("Incident.Incidents")}</h3>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="new">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={incidents} isLoading={isLoading} />
    </Container>
  );
};

export default IncidentsList;
