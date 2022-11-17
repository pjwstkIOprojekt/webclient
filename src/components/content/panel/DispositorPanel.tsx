import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Route, Routes } from "react-router-dom";
import ReportsList from "../report/ReportsList";
import ReportForm from "../report/ReportForm";
import FacilitiesList from "../faciliites/FacilitiesList";
import FacilityForm from "../faciliites/FacilityForm";

const DispositorPanel = () => {
  const { t } = useTranslation();

  const links = [
    { to: "reports", text: t("Reports.Reports") },
    { to: "facilities", text: "Placówki" }
  ];

  return (
    <Container fluid className="my-3">
      <Navtab links={links} />
      <Routes>
        <Route path="reports" element={<ReportsList />} />
        <Route path="reports/:reportId" element={<ReportForm />} />
        <Route path="facilities" element={<FacilitiesList />} />
        <Route path="facilities/new" element={<FacilityForm />} />
        <Route path="facilities/edit/:facilityId" element={<FacilityForm />} />
      </Routes>
    </Container>
  );
};

export default DispositorPanel;
