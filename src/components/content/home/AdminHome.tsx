import NavButton from "../../fragments/navigation/NavButton";
import { Container, Row, Card } from "react-bootstrap";
import CustomCard from "../../fragments/util/Card";
import PieChart from "../../fragments/charts/PieChart";
import Table from "../../fragments/util/Table";
import { useTranslation } from "react-i18next";

const AdminHome = () => {
  const { t } = useTranslation();
  const data = [
    { id: 1, name: "Karetka T", accident: 1, status: t('Ambulance.OnGo'), color: "#ff0000" },
    { id: 2, name: "Karetka R", accident: 1, status: t('Ambulance.OnGo'), color: "#ff0000" },
    { id: 3, name: "Karetka R", accident: 2, status: t('Ambulance.OnSite'), color: "#0000ff" },
    { id: 4, name: "Karetka Covid", accident: 3, status: t('Ambulance.Return'), color: "#00ff00" }
  ];

  const cols = [
    { name: "#", property: "id", sortBy: "id", filterBy: "id", size: 10 },
    { name: t('Ambulance.Ambulance'), property: "name", sortBy: "name", filterBy: "name" },
    { name: t('Ambulance.Equipment'), property: (x: Record<string, any>) => <NavButton to={`/admpanel/ambulances/equipment/${x.id}`}>{t('Ambulance.View')}</NavButton>, size: 12 },
    { name: t('Reports.Report'), property: (x: Record<string, any>) => <NavButton to={`/admpanel/reports/${x.accident}`}>{t('Ambulance.View')}</NavButton>, sortBy: "accident", filterBy: "accident", size: 12 },
    { name: t('Ambulance.State'), property: (x: Record<string, any>) => <span style={{ color: x.color }}>{x.status}</span>, filterBy: "status", sortBy: "status", size: 20 }
  ];

  const pieDat = [
    { name: t('Person.ParamedicsInactive'), value: 4, fill: "#bbbb00", fillDark: "#5dbf62" },
    { name: t('Person.ParamedicsOnStandby'), value: 24, fill: "#5dbf62", fillDark: "#c59812" },
    { name: t('Person.ParamedicsInAction'), value: 11, fill: "#343489", fillDark: "#aaaa00" }
  ];

  const pieDat2 = [
    { name: t('Reports.Accidents'), value: 4, fill: "#bbbb00", fillDark: "#5dbf62" },
    { name: t('Reports.TerroristAttacks'), value: 0, fill: "#5dbf62", fillDark: "#c59812" },
    { name: t('Reports.CovidOutbreaks'), value: 3, fill: "#343489", fillDark: "#aaaa00" },
    { name: t('Reports.Fires'), value: 1, fill: "#000000", fillDark: "#cc4444" }
  ];

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1 className="mb-3">{t('MainPage.MainPanel')}</h1>
      <Row xs={2}>
        <CustomCard>
          <Card.Header>
            <Card.Title>{t('Person.StateStaff')}</Card.Title>
          </Card.Header>
          <Card.Body>
            <PieChart width={500} height={600} data={pieDat} label legend tooltip />
          </Card.Body>
        </CustomCard>
        <CustomCard>
          <Card.Header>
            <Card.Title>{t('MainPage.Report24h')}</Card.Title>
          </Card.Header>
          <Card.Body>
            <PieChart width={500} height={600} data={pieDat2} label legend tooltip />
          </Card.Body>
        </CustomCard>
      </Row>
      <h2 className="mt-5 mb-3">{t('Ambulance.Active')}</h2>
      <Table columns={cols} data={data} />
    </Container>
  );
};

export default AdminHome;
