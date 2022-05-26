import { Container, Nav } from 'react-bootstrap'
import { Link, Route, Routes, NavLink } from 'react-router-dom'
import Test from '../../temp/Test'
import AmbulanceList from '../ambulance/AmbulanceList'
import MapAmbulance from '../ambulance/MapAmbulance'
import PatientList from '../victim/DangerousVictim'
import AcceptReport from '../report/AcceptReport'
import ReportsList from '../report/ReportsList'
import CheckIn from '../staff/CheckIn'

const Panel = () => {
  return (
    <Container fluid className='my-3'>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link as={NavLink} to="mainpanel">Panel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="reports">Zgłoszenia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="ambulanceMap">Mapa karetek</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="ambulances">Lista karetek</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="patients">Lista pacjentów</Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="mainpanel" element={<Container fluid><CheckIn /><AcceptReport /></Container>} />
        <Route path="reports" element={<ReportsList />} />
        <Route path="ambulanceMap" element={<MapAmbulance />} />
        <Route path="ambulances" element={<AmbulanceList />} />
        <Route path="patients" element={<PatientList />} />
        
      </Routes>
    </Container>
  )
}

export default Panel