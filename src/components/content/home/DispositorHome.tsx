import { useState, useEffect } from "react";
import { AccidentReportResponse, getAccidents } from "../../../api/accidentReportCalls";
import { useTranslation } from "react-i18next";
import { getAmbulances, AmbulanceResponse } from "../../../api/ambulanceCalls";
import { AmbulanceState, EmergencyType } from "../../../api/enumCalls";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import DateDisplay from "../../fragments/values/DateDisplay";
import { Container, Row } from "react-bootstrap";
import ProgressChart from "../../fragments/charts/ProgressChart";
import PieChart from "../../fragments/charts/PieChart";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";

const DispositorHome = () => {
  const [accidents, setAccidents] = useState<AccidentReportResponse[]>([]);

  const [ambulances, setAmbulances] = useState({
    available: 0,
    all: 0
  });

  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const accReq = getAccidents().then(res => res.json());
    const ambReq = getAmbulances().then(res => res.json());

    Promise.all([accReq, ambReq]).then((data: [AccidentReportResponse[], AmbulanceResponse[]]) => {
      if (data) {
        setAccidents(data[0].map(d => ({
          ...d,
          date: new Date(d.date)
        })));

        setAmbulances({
          available: data[1].filter(d => d.ambulanceStateType === AmbulanceState.available).length,
          all: data[1].length
        });
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const cols = [
    { name: "#", property: (x: Readonly<AccidentReportResponse>) => <Link to={`/dispanel/reports/${x.accidentId}`}>{x.accidentId}</Link>, sortBy: "accidentId", filterBy: "accidentId" },
    { name: t("Report.Type"), property: (x: Readonly<AccidentReportResponse>) => <Enum enum={EmergencyType} value={x.emergencyType} />, filterBy: "emergencyType", sortBy: "emergencyType" },
    { name: t("Report.Date"), property: (x: Readonly<AccidentReportResponse>) => <DateDisplay value={x.date} />, sortBy: "date", filterBy: "date" },
    { name: t("Report.VictimsCount"), property: "victimCount", filterBy: "victimCount", sortBy: "victimCount" }
  ];

  const chartData = [];

  for (const eType in EmergencyType.colors) {
    const tmp = {
      name: t(`${EmergencyType.name}.${eType}`),
      value: accidents.filter(a => a.emergencyType === eType).length,
      fill: EmergencyType.colors[eType].light,
      fillDark: EmergencyType.colors[eType].dark
    };

    if (tmp.value > 0) {
      chartData.push(tmp);
    }
  }

  if (chartData.length < 1) {
    chartData.push({
      name: "",
      value: 1,
      fill: "#777777",
      fillDark: "#777777"
    });
  }

  return (
    <Container className="mt-5">
      <h1 className="mb-3 text-center">{t("HomePage.Dispositor")}</h1>
      <Row xs={3} className="justify-content-around">
        <ProgressChart width={350} height={350} value={ambulances.all !== 0 ? (ambulances.available / ambulances.all) * 100 : 0} innerRadius="100" label tooltip color={{
          r: 255,
          g: 162,
          b: 0
        }} full={t("HomePage.AmbulanceAvailable")} empty={t("HomePage.AmbulanceUnavailable")} />
        <PieChart width={350} height={350} data={chartData} innerRadius="90" label legend tooltip />
        <ProgressChart width={350} height={350} value={79} innerRadius="100" label tooltip color={{
          r: 0,
          g: 146,
          b: 255
        }} full={t("HomePage.ReportAccepted")} empty={t("HomePage.ReportPending")} />
      </Row>
      <Row xs={3} className="text-center">
        <h3>{t("HomePage.AmbulancesAvailable")}</h3>
        <h3>{t("HomePage.Incidents")}</h3>
        <h3>{t("HomePage.ReportsAccepted")}</h3>
      </Row>
      <Row className="my-3 justify-content-center">
        <NavButton to="/map" className="w-25">{t("HomePage.OpenMap")}</NavButton>
      </Row>
      <h2 className="text-center">{t("Report.Reports")}</h2>
      <Row className="my-3">
        <Table columns={cols} data={accidents} isLoading={isLoading} />
      </Row>
    </Container>
  );
};

export default DispositorHome;
