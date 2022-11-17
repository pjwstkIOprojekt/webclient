import { useState, useEffect } from "react";
import { AccidentReportResponse, getAccidents, deleteAccident } from "../../../api/accidentReportCalls";
import { useTranslation } from "react-i18next";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import { EmergencyType } from "../../../api/enumCalls";
import DateDisplay from "../../fragments/values/DateDisplay";
import Button from "../../fragments/util/Button";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const ReportsList = () => {
  const [reports, setReports] = useState<AccidentReportResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    getAccidents().then(res => res.json()).then((data: AccidentReportResponse[]) => {
      if (data) {
        setReports(data.map(d => ({
          ...d,
          date: new Date(d.date)
        })));
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const remove = (id: number) => {
    if (!window.confirm("Czy na pewno chcesz usunąć to zgłoszenie?")) {
      return;
    }

    setReports(reports.filter(r => r.accidentId !== id));
    deleteAccident(id);
  };

  const cols = [
    { name: "#", property: (x: Readonly<AccidentReportResponse>) => <Link to={x.accidentId.toString()}>{x.accidentId}</Link>, filterBy: "accidentId", sortBy: "accidentId" },
    { name: "Rodzaj zdarzenia", property: (x: Readonly<AccidentReportResponse>) => <Enum enum={EmergencyType} value={x.emergencyType} />, filterBy: "emergencyType", sortBy: "emergencyType" },
    { name: "Liczba ofiar", property: "victimCount", filterBy: "victimCount", sortBy: "victimCount" },
    { name: t("Reports.Date"), property: (x: Readonly<AccidentReportResponse>) => <DateDisplay value={x.date} />, filterBy: "date", sortBy: "date" },
    { name: "Kod z opaski", property: "bandCode", filterBy: "bandCode", sortBy: "bandCode" },
    { name: "Opis", property: "description", filterBy: "description", sortBy: "description" },
    { name: "Usuń", property: (x: Readonly<AccidentReportResponse>) => <Button onClick={e => remove(x.accidentId)}>X</Button> }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h1>Zgłoszenia</h1>
      <Table columns={cols} data={reports} isLoading={isLoading} />
    </Container>
  );
};

export default ReportsList;
