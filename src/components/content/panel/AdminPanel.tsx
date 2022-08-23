import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Route, Routes } from "react-router-dom";
import AcceptReport from "../report/AcceptReport";
import Report from "../incident/Report";
import AmbulanceList from "../ambulance/AmbulanceList";
import PatientList from "../victim/DangerousVictim";
import SendMessage from "../ambulance/SendMessage";
import StaffList from "../staff/StaffList";
import UserList from "../admin/UserList";
import AddUser from "../admin/AddUser";
import AddStaffUser from "../staff/AddStaffUser";
import EditStaffUser from "../staff/EditStaffUser";

const AdminPanel = () => {
  const links = [
    { to: "reports", text: "Zgłoszenia" },
    { to: "ambulances", text: "Lista karetek" },
    { to: "patients", text: "Zgłoś niebezpiecznego pacjenta" },
    { to: "message", text: "Wyślij wiadomość do kierowcy" },
    { to: "staff", text: "Pracownicy" },
    { to: "users", text: "Uzytkownicy" }

  ];

  return (
    <Container fluid className="my-3">
      <Navtab links={links} />
      <Routes>
        <Route path="reports" element={<AcceptReport />} />
        <Route path="reports/:idReport" element={<Report />} />
        <Route path="ambulances" element={<AmbulanceList />} />
        <Route path="patients" element={<PatientList />} />
        <Route path="message" element={<SendMessage />} />
        <Route path="staff" element={<StaffList />} />
        <Route path="users" element={<UserList />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="staff/new" element={<AddStaffUser />} />
        <Route path="staff/edit/:userId" element={<EditStaffUser />} />
      </Routes>
    </Container>
  );
};

export default AdminPanel;
