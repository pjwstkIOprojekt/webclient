import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Route, Routes } from "react-router-dom";
import AcceptReport from "../report/AcceptReport";
import Report from "../incident/Report";
import AmbulanceList from "../ambulance/AmbulanceList";
import AmbulanceEquipmentList from "../ambulance/AmbulanceEquipmentList";
import AmbulanceEquipment from "../ambulance/AmbulanceEquipment";
import VictimsList from "../victim/VictimsList";
import VictimInfo from "../victim/VictimInfo";
import StaffList from "../staff/StaffList";
import StaffUserForm from "../staff/StaffUserForm";

const AdminPanel = () => {
  const links = [
    { to: "reports", text: "Zgłoszenia" },
    { to: "ambulances", text: "Lista karetek" },
    { to: "victims", text: "Poszkodowani" },
    { to: "staff", text: "Pracownicy" }
  ];

  return (
    <Container fluid className="my-3">
      <Navtab links={links} />
      <Routes>
        <Route path="reports" element={<AcceptReport />} />
        <Route path="reports/:idReport" element={<Report />} />
        <Route path="ambulances" element={<AmbulanceList />} />
        <Route path="ambulances/equipment/:ambulanceId" element={<AmbulanceEquipmentList />} />
        <Route path="equipment/:equipmentId" element={<AmbulanceEquipment />} />
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
