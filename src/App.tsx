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
              <Nav.Link as={Link} to="/tutorial">Tutoriale</Nav.Link>
              <Nav.Link as={Link} to="/map">Mapa</Nav.Link>
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
      </Routes>
      <CookieConsent debug />
    </BrowserRouter>
  );
};

export default App;
