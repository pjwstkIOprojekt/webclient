import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Navtab from "../../fragments/navigation/Navtab";
import AcceptReport from "../report/AcceptReport";
import AmbulanceList from '../ambulance/AmbulanceList';
import PatientList from '../victim/DangerousVictim';
import Report from '../incident/Report';

const links = [
  { to: "reports", text: "Zgłoszenia" },
  { to: "ambulances", text: "Lista karetek" },
  { to: "patients", text: "Niebezpieczni pacjenci" }
];

const Panel = () => {
  return (
    <Container fluid className='my-3'>
      <Navtab links={links} />
      <Routes>
        <Route path="reports" element={<AcceptReport />} />
        <Route path="reports/:idReport" element={<Report />} />
        <Route path="ambulances" element={<AmbulanceList />} />
        <Route path="patients" element={<PatientList />} />
      </Routes>
    </Container>
  );
};

export default Panel;
