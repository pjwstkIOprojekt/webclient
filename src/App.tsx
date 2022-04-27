import { useDarkModeManager } from "./hooks/useDarkMode";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Login from "./components/content/auth/Login";
import Register from "./components/content/auth/Register";
import ForgotPassword from "./components/content/auth/ForgotPassword";
import TutorialView from "./components/content/tutorial/TutorialView";
import Tutorial from "./components/content/tutorial/Tutorial";
import MapView from "./components/content/map/MapView";
import { CookieConsent } from "./components/CookieConsent";

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
      <Navbar bg={`custom-${darkMode.isDark ? "dark" : "light"}`} variant={darkMode.isDark ? "dark" : "light"} expand="lg">
        <Container fluid className="mx-3">
          <Navbar.Brand>GARY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Strona tymczasowa</Nav.Link>
              <Nav.Link as={Link} to="/login">Zaloguj się</Nav.Link>
              <Nav.Link as={Link} to="/register">Rejestracja</Nav.Link>
              <Nav.Link as={Link} to="/tutorial">Tutoriale</Nav.Link>
              <Nav.Link as={Link} to="/map">Mapa</Nav.Link>
              <Nav.Link as={Link} to="/userinfo">Twoje dane</Nav.Link>
              <Nav.Link onClick={handleLogout}>Wyloguj</Nav.Link>
              <Nav.Link onClick={darkMode.toggle}>Zmień motyw</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/iforgor" element={<ForgotPassword />} />
        <Route path="/tutorial" element={<TutorialView />} />
        <Route path="/tutorial/:tutorialId" element={<Tutorial />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/userinfo/editbloodtype" element={<EditBloodType />} />
        <Route path="/userinfo/allergy/add" element={<AddAllergy />} />
        <Route path="/userinfo/allergy/details/:allergyId" element={<EditAllergy />} />
        <Route path="/userinfo/allergy/edit/:allergyId" element={<EditAllergy />} />
        <Route path="/userinfo/medicalcondition/add" element={<AddMedicalCondition />} />
        <Route path="/userinfo/medicalcondition/edit/:allergyId" element={<EditMedicalCondition />} />
        
        
      </Routes>
      <CookieConsent debug />
    </BrowserRouter>
  );
};

export default App;
