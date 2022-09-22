import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Route, Routes } from "react-router-dom";
import AcceptReport from "../report/AcceptReport";
import Report from "../incident/Report";
import AmbulanceList from "../ambulance/AmbulanceList";
import AmbulanceEquipment from "../ambulance/AmbulanceEquipment";
import DangerousVictim from "../victim/DangerousVictim";

const DispositorPanel = () => {
  const links = [
    { to: "reports", text: "Zgłoszenia" },
    { to: "ambulances", text: "Lista karetek" },
    { to: "patients", text: "Zgłoś niebezpiecznego pacjenta" }
  ];

  return (
    <Container fluid className="my-3">
      <Navtab links={links} />
      <Routes>
        <Route path="reports" element={<AcceptReport />} />
        <Route path="reports/:idReport" element={<Report />} />
        <Route path="ambulances" element={<AmbulanceList />} />
        <Route path="ambulances/equipment/:ambulanceId" element={<AmbulanceEquipment />} />
        <Route path="patients" element={<DangerousVictim />} />
      </Routes>
    </Container>
  );
};

export default DispositorPanel;
