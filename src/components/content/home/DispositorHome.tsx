import { Container, Row } from "react-bootstrap";
import ProgressChart from "../../fragments/charts/ProgressChart";
import PieChart from "../../fragments/charts/PieChart";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";
import { useTranslation } from "react-i18next";

const DispositorHome = () => {
  const { t } = useTranslation();
  const tableData = [
    { date: "2022-07-19 18:00", cause: t('Reports.Accident'), scale: 2 },
    { date: "2022-07-12 16:53", cause: t('Reports.TerroristAttack'), scale: 4 }
  ];

  const cols = [
    { name: t('Reports.Date'), property: "date", sortBy: "date", filterBy: "date", size: 12 },
    { name: t('Reports.Kind'), property: "cause", sortBy: "cause", filterBy: "cause" },
    { name: t('Reports.DangerRating'), property: "scale", sortBy: "scale", filterBy: "scale", size: 12 }
  ];

  const data = [
    { name: t('Reports.Accidents'), value: 4, fill: "#bbbb00", fillDark: "#5dbf62" },
    { name: t('Reports.TerroristAttacks'), value: 1, fill: "#5dbf62", fillDark: "#c59812" },
    { name: t('Reports.CovidOutbreaks'), value: 3, fill: "#343489", fillDark: "#aaaa00" }
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-3 text-center">{t('MainPage.MainPanel')}</h1>
      <Row xs={4} className="justify-content-around">
        <ProgressChart width={350} height={350} value={43} innerRadius="100" color={{
          r: 255,
          g: 162,
          b: 0
        }} />
        <PieChart width={350} height={350} data={data} innerRadius="90" legend tooltip />
        <ProgressChart width={350} height={350} value={79} innerRadius="100" label color={{
          r: 0,
          g: 146,
          b: 255
        }} />
      </Row>
      <Row xs={3} className="text-center">
        <h3>{t('Ambulance.Available')}</h3>
        <h3>{t('MainPage.Incidents')}</h3>
        <h3>{t('Reports.Accepted')}</h3>
      </Row>
      <Row className="mt-5 justify-content-center">
        <NavButton to="/map" className="w-25">{t('MainPage.OpenMap')}</NavButton>
      </Row>
      <Row className="my-5">
        <Table columns={cols} data={tableData} />
      </Row>
    </Container>
  );
};

export default DispositorHome;
