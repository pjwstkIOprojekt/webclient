import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Navtab from "../../fragments/navigation/Navtab";
import AmbulanceList from '../ambulance/AmbulanceList'
import MapAmbulance from '../ambulance/MapAmbulance'
import PatientList from '../victim/DangerousVictim'
import AcceptReport from '../report/AcceptReport'
import ReportsList from '../report/ReportsList'

const links = [
  { to: "main", text: "Panel" },
  { to: "reports", text: "Zgłoszenia" },
  { to: "ambulanceMap", text: "Mapa karetek" },
  { to: "ambulances", text: "Lista karetek" },
  { to: "patients", text: "Lista poszkodowanych" }
];

const Panel = () => {
  return (
    <Container fluid className='my-3'>
      <Navtab links={links} />
      <Routes>
        <Route path="main" element={<AcceptReport />} />
        <Route path="reports" element={<ReportsList />} />
        <Route path="ambulanceMap" element={<MapAmbulance />} />
        <Route path="ambulances" element={<AmbulanceList />} />
        <Route path="patients" element={<PatientList />} />
      </Routes>
    </Container>
  )
}

export default Panel