import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Route, Routes } from "react-router-dom";
import ReportsList from "../report/ReportsList";
import ReportForm from "../report/ReportForm";

const DispositorPanel = () => {
  const { t } = useTranslation();

  const links = [
    { to: "reports", text: t("Reports.Reports") }
  ];

  return (
    <Container fluid className="my-3">
      <Navtab links={links} />
      <Routes>
        <Route path="reports" element={<ReportsList />} />
        <Route path="reports/:reportId" element={<ReportForm />} />
      </Routes>
    </Container>
  );
};

export default DispositorPanel;
