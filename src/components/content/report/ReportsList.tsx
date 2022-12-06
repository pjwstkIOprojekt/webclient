import { useState, useEffect } from "react";
import { usePopup } from "../../../hooks/usePopup";
import { IncidentResponse, getIncidents, deleteIncident } from "../../../api/incidentCalls";
import { useTranslation } from "react-i18next";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import { IncidentType } from "../../../api/enumCalls";
import Delete from "../../fragments/forms/Delete";
import ConfirmPopup from "../../fragments/popups/ConfirmPopup";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const ReportsList = () => {
  const [reports, setReports] = useState<IncidentResponse[]>([]);
  const [removed, setRemoved] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const popup = usePopup();

  useEffect(() => {
    getIncidents().then(res => res.json()).then((data: IncidentResponse[]) => {
      if (data) {
        setReports(data);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const remove = (id: number) => {
    setRemoved([...removed, id]);
    
    deleteIncident(id).then(res => {
      if (res.ok) {
        setReports(reports.filter(r => r.incidentId !== id));
      } else {
        console.log(res);
      }

      setRemoved(removed.filter(i => i !== id));
    }).catch(err => {
      console.error(err);
      setRemoved(removed.filter(i => i !== id));
    });
  };

  const idField = "incidentId";
  const statusField = "incidentStatusType";
  const dangerField = "dangerScale";
  const reactionField = "reactionJustification";

  const cols = [
    { name: "#", property: (x: Readonly<IncidentResponse>) => <Link to={`${x.incidentId}/data`}>{x.incidentId}</Link>, filterBy: idField, sortBy: idField },
    { name: t("Report.StatusType"), property: (x: Readonly<IncidentResponse>) => <Enum enum={IncidentType} value={x.incidentStatusType} />, filterBy: statusField, sortBy: statusField },
    { name: t("Report.DangerScale"), property: dangerField, filterBy: dangerField, sortBy: dangerField },
    { name: t("Report.Justification"), property: reactionField, filterBy: reactionField, sortBy: reactionField },
    { name: t("Common.Remove"), property: (x: Readonly<IncidentResponse>) => <Delete onClick={() => popup(<ConfirmPopup text="Report.ConfirmRemove" onConfirm={() => remove(x.incidentId)} />)} canDelete={!removed.includes(x.incidentId)} /> }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h1>{t("Report.Reports")}</h1>
      <Table columns={cols} data={reports} isLoading={isLoading} />
    </Container>
  );
};

export default ReportsList;
