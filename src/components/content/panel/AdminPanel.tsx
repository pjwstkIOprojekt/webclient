import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Route, Routes } from "react-router-dom";
import AmbulanceList from "../ambulance/AmbulanceList";
import AmbulanceForm from "../ambulance/AmbulanceForm";
import AmbulanceHistory from "../ambulance/AmbulanceHistory";
import AmbulanceState from "../ambulance/AmbulanceState";
import VictimsList from "../victim/VictimsList";
import VictimInfo from "../victim/VictimInfo";
import StaffList from "../staff/StaffList";
import StaffUserForm from "../staff/StaffUserForm";

const AdminPanel = () => {
  const { t } = useTranslation();

  const links = [
    { to: "ambulances", text: t("Ambulance.Ambulances") },
    { to: "victims", text: "Poszkodowani" },
    { to: "staff", text: "Personel" }
  ];

  return (
    <Container fluid className="my-3">
      <Navtab links={links} />
      <Routes>
        <Route path="ambulances" element={<AmbulanceList />} />
        <Route path="ambulances/new" element={<AmbulanceForm />} />
        <Route path="ambulances/edit/:ambulanceId" element={<AmbulanceForm />} />
        <Route path="ambulances/hist/:ambulanceId" element={<AmbulanceHistory />} />
        <Route path="ambulances/state/:ambulanceId" element={<AmbulanceState />} />
        <Route path="victims" element={<VictimsList />} />
        <Route path="victims/edit/:victimId" element={<VictimInfo />} />
        <Route path="staff" element={<StaffList />} />
        <Route path="staff/new" element={<StaffUserForm />} />
        <Route path="staff/edit/:userId" element={<StaffUserForm />} />
      </Routes>
    </Container>
  );
};

export default AdminPanel;
