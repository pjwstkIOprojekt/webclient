import { useDarkModeManager } from "./hooks/useDarkMode";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Login from "./components/content/auth/Login";
import Register from "./components/content/auth/Register";
import ForgotPassword from "./components/content/auth/ForgotPassword";
import { CookieConsent } from "./components/CookieConsent";
import VideoView from "./components/content/video/VideoView";

export default function App() {
  const darkMode = useDarkModeManager();

  return (
    <BrowserRouter>
      <Navbar bg={`custom-${darkMode.isDark ? "dark" : "light"}`} variant={darkMode.isDark ? "dark" : "light"} expand="lg">
        <Container fluid className="mx-3">
          <Navbar.Brand>GARY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Custom</Nav.Link>
            <Nav.Link onClick={darkMode.toggle}>Zmień motyw</Nav.Link>
            <Nav.Link as={Link} to="/videos">Filmy</Nav.Link>
            <Nav.Link as={Link} to="/">Mapa</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/iforgor" element={<ForgotPassword />} />
        <Route path="/videos" element={<VideoView />} />
      </Routes>
      <CookieConsent debug />
    </BrowserRouter>
  );
}
