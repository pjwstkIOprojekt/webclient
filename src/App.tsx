import { useDarkModeManager } from "./hooks/useDarkMode";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Test from "./components/Test";
import Login from "./components/content/auth/Login";
import Register from "./components/content/auth/Register";
import ForgotPassword from "./components/content/auth/ForgotPassword";
import TutorialView from "./components/content/tutorial/TutorialView";
import Tutorial from "./components/content/tutorial/Tutorial";
import MapView from "./components/fragments/MapView";
import ReportsList from "./components/content/report/ReportsList";
import AccidentReport from "./components/content/report/AccidentReport";
import CreateReport from "./components/content/report/CreateReport";
import { CookieConsent } from "./components/CookieConsent";
import AmbulanceList from "./components/content/ambulance/AmbulanceList";
import MapAmbulance from "./components/content/ambulance/MapAmbulance"
import CreateAmbulance from "./components/content/ambulance/CreateAmbulance";

import { handleLogout } from "./helpers/authHelper";
import UserInfo from "./components/content/userinfo/UserInfo";
import EditBloodType from "./components/content/userinfo/bloodtype/EditBloodTypeView";
import AddAllergy from "./components/content/userinfo/allergy/AddAllergy";
import EditAllergy from "./components/content/userinfo/allergy/EditAllergy";
import AddMedicalCondition from "./components/content/userinfo/medicalCondition/AddMedicalCondition";
import EditMedicalCondition from "./components/content/userinfo/medicalCondition/EditMedicalCondition";

const App = () => {
  const darkMode = useDarkModeManager();

  return (
    <BrowserRouter>
      <Navbar bg={`navbar-${darkMode.isDark ? "dark" : "light"}`} variant={darkMode.isDark ? "dark" : "light"} expand="lg">
        <Container fluid className="mx-3">
          <Navbar.Brand>GARY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Strona tymczasowa</Nav.Link>
              <Nav.Link as={Link} to="/login">Zaloguj się</Nav.Link>
              <Nav.Link as={Link} to="/register">Rejestracja</Nav.Link>
              <Nav.Link onClick={handleLogout}>Wyloguj</Nav.Link>
              <Nav.Link onClick={darkMode.toggle}>Zmień motyw</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/iforgor" element={<ForgotPassword />} />
        <Route path="/tutorial" element={<TutorialView />} />
        <Route path="/tutorial/:tutorialId" element={<Tutorial />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/userinfo/editbloodtype" element={<EditBloodType />} />
        <Route path="/userinfo/allergy/add" element={<AddAllergy />} />
        <Route path="/userinfo/allergy/details/:allergyId" element={<EditAllergy />} />
        <Route path="/userinfo/allergy/edit/:allergyId" element={<EditAllergy />} />
        <Route path="/userinfo/medicalcondition/add" element={<AddMedicalCondition />} />
        <Route path="/userinfo/medicalcondition/edit/:allergyId" element={<EditMedicalCondition />} />
        <Route path="/map" element={<MapView center={[52.222, 21.015]} initialZoom={12} />} />
        <Route path="/reports" element={<ReportsList />} />
        <Route path="/report/:reportId" element={<CreateReport />} />
        <Route path="/newreport" element={<MapView center={[52.222, 21.015]} initialZoom={12} element={<CreateReport />} />} />
        <Route path="/mapAmbulance" element={<MapView center={[52.222, 21.015]} initialZoom={12} element={<MapAmbulance />} />} />
        <Route path="/ambulances" element={<AmbulanceList />} />
        <Route path="/ambulance/:ambulanceId" element={<CreateAmbulance />} />
        <Route path="/ambulance/add" element={<CreateAmbulance />} />
      </Routes>
      <CookieConsent debug />
    </BrowserRouter>
  );
};

export default App;
