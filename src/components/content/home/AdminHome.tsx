import { useState, useEffect } from "react";
import { AmbulanceResponse, getAmbulances } from "../../../api/ambulanceCalls";
import { AccidentReportResponse, getAccidents } from "../../../api/accidentReportCalls";
import { useTranslation } from "react-i18next";
import Enum from "../../fragments/values/Enum";
import { AmbulanceClass, AmbulanceType, AmbulanceState } from "../../../api/enumCalls";
import { EmergencyType } from "../../../api/enumCalls";
import { Container, Row, Card } from "react-bootstrap";
import CustomCard from "../../fragments/util/Card";
import PieChart from "../../fragments/charts/PieChart";
import Table from "../../fragments/util/Table";

const AdminHome = () => {
  const [ambulances, setAmbulances] = useState<AmbulanceResponse[]>([]);
  const [accidents, setAccidents] = useState<AccidentReportResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const ambReq = getAmbulances().then(res => res.json());
    const accReq = getAccidents().then(res => res.json());

    Promise.all([ambReq, accReq]).then((data: [AmbulanceResponse[], AccidentReportResponse[]]) => {
      if (data) {
        setAmbulances(data[0]);
        setAccidents(data[1]);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const cols = [
    { name: t("Ambulance.RegistrationNumber"), property: "licensePlate", sortBy: "licensePlate", filterBy: "licensePlate" },
    { name: t("Ambulance.Kind"), property: (x: Readonly<AmbulanceResponse>) => <Enum enum={AmbulanceClass} value={x.ambulanceClass} />, sortBy: "ambulanceClass", filterBy: "ambulanceClass" },
    { name: t("Ambulance.Type"), property: (x: Readonly<AmbulanceResponse>) => <Enum enum={AmbulanceType} value={x.ambulanceType} />, sortBy: "ambulanceType", filterBy: "ambulanceType" },
    { name: t("Ambulance.State"), property: (x: Readonly<AmbulanceResponse>) => <Enum enum={AmbulanceState} value={x.ambulanceStateType} />, filterBy: "ambulanceStateType", sortBy: "ambulanceStateType" }
  ];

  const pieDat = [
    { name: t('Person.ParamedicsInactive'), value: 4, fill: "#bbbb00", fillDark: "#5dbf62" },
    { name: t('Person.ParamedicsOnStandby'), value: 24, fill: "#5dbf62", fillDark: "#c59812" },
    { name: t('Person.ParamedicsInAction'), value: 11, fill: "#343489", fillDark: "#aaaa00" }
  ];

  const pieDat2 = [];
  const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));

  for (const eType in EmergencyType.colors) {
    const tmp = {
      name: t(`${EmergencyType.name}.${eType}`),
      value: accidents.filter(a => a.date > yesterday && a.emergencyType === eType).length,
      fill: EmergencyType.colors[eType].light,
      fillDark: EmergencyType.colors[eType].dark
    };

    if (tmp.value > 0) {
      pieDat2.push(tmp);
    }
  }

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1 className="mb-3">{t("MainPage.MainPanel")}</h1>
      <Row xs={2}>
        <CustomCard>
          <Card.Header>
            <Card.Title>{t("Person.StateStaff")}</Card.Title>
          </Card.Header>
          <Card.Body>
            <PieChart width={500} height={600} data={pieDat} label legend tooltip />
          </Card.Body>
        </CustomCard>
        <CustomCard>
          <Card.Header>
            <Card.Title>{t("MainPage.Report24h")}</Card.Title>
          </Card.Header>
          <Card.Body>
            <PieChart width={500} height={600} data={pieDat2} label legend tooltip />
          </Card.Body>
        </CustomCard>
      </Row>
      <h2 className="mt-5 mb-3">{t("Ambulance.Active")}</h2>
      <Table columns={cols} data={ambulances} isLoading={isLoading} />
    </Container>
  );
};

export default AdminHome;
