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
import CreateReport from "./components/content/report/CreateReport";
import { CookieConsent } from "./components/CookieConsent";

import { handleLogout } from "./helpers/authHelper";
import EditBloodType from "./components/content/userinfo/bloodtype/EditBloodTypeView";
import AddAllergy from "./components/content/userinfo/allergy/AddAllergy";
import EditAllergy from "./components/content/userinfo/allergy/EditAllergy";
import AddMedicalCondition from "./components/content/userinfo/medicalCondition/AddMedicalCondition";
import EditMedicalCondition from "./components/content/userinfo/medicalCondition/EditMedicalCondition";
import UserData from "./components/content/userinfo/personalinfo/UserData";
import MedicalData from "./components/content/userinfo/MedicalData";
import { EditName } from "./components/content/userinfo/personalinfo/EditName";
import EditEmail from "./components/content/userinfo/personalinfo/EditEmail";
import EditUsername from "./components/content/userinfo/personalinfo/EditUsername";
import EditPassword from "./components/content/userinfo/personalinfo/EditPassword";
import EditBirthday from "./components/content/userinfo/personalinfo/EditBirthday";
import EditPhoneNumber from "./components/content/userinfo/personalinfo/EditPhoneNumber";

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
        <Route path="/userdata" element={<UserData />} />
        <Route path="/userdata/name" element={<EditName />} />
        <Route path="/userdata/email" element={<EditEmail />} />
        <Route path="/userdata/username" element={<EditUsername />} />
        <Route path="/userdata/password" element={<EditPassword />} />
        <Route path="/userdata/birthday" element={<EditBirthday />} />
        <Route path="/userdata/phonenumber" element={<EditPhoneNumber />} />
        <Route path="/medicaldata" element={<MedicalData />} />
        <Route path="/medicaldata/editbloodtype" element={<EditBloodType />} />
        <Route path="/medicaldata/allergy/add" element={<AddAllergy />} />
        <Route path="/medicaldata/allergy/details/:allergyId" element={<EditAllergy />} />
        <Route path="/medicaldata/allergy/edit/:allergyId" element={<EditAllergy />} />
        <Route path="/medicaldata/medicalcondition/add" element={<AddMedicalCondition />} />
        <Route path="/medicaldata/medicalcondition/edit/:allergyId" element={<EditMedicalCondition />} />
        <Route path="/map" element={<MapView center={[52.222, 21.015]} initialZoom={12} />} />
        <Route path="/reports" element={<ReportsList />} />
        <Route path="/report/:reportId" element={<CreateReport />} />
        <Route path="/newreport" element={<MapView center={[52.222, 21.015]} initialZoom={12} element={<CreateReport />} />} />
      </Routes>
      <CookieConsent debug />
    </BrowserRouter>
  );
};

export default App;
