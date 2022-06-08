import { useDarkModeManager } from "../../../hooks/useDarkMode";
import { Navbar as Inner, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaClinicMedical, FaMedkit, FaBook, FaMapMarkerAlt, FaUserCircle, FaNotesMedical } from "react-icons/fa";
import CheckIn from "../../content/staff/CheckIn";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdSettings, IoIosPaper } from "react-icons/io";
import { keycloakClient } from "../../../helpers/authHelper";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const darkMode = useDarkModeManager();

  return (
    <Inner
      bg={`navbar-${darkMode.isDark ? "dark" : "light"}`}
      variant={darkMode.isDark ? "dark" : "light"}
      expand="lg"
    >
      <Container fluid>
        <Inner.Brand className="px-5">GARY</Inner.Brand>
        <Inner.Toggle aria-controls="basic-navbar-nav" />
        <Inner.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="d-inline-flex align-items-center">
              <FaClinicMedical />
              <span className="px-1">Panel</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/newreport" className="d-inline-flex align-items-center">
              <FaMedkit />
              <span className="px-1">Zgłoszenie</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/tutorial" className="d-inline-flex align-items-center">
              <FaBook />
              <span className="px-1">Poradniki</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/map" className="d-inline-flex align-items-center">
              <FaMapMarkerAlt />
              <span className="px-1">Mapa</span>
            </Nav.Link>
          </Nav>

          <Nav>
            <CheckIn />
            <Nav.Link onClick={darkMode.toggle} className="d-inline-flex align-items-center">
              <HiOutlineLightBulb />
              <span className="px-1">Zmień motyw</span>
            </Nav.Link>
            <NavDropdown
              align="end"
              title={
                <span className="d-inline-flex align-items-center">
                  <FaUserCircle />
                  <span className="px-1">Konto</span>
                </span>
              }
              >
              <NavDropdown.Item as={Link} to="/settings/userdata" className="d-inline-flex align-items-center">
                <IoMdSettings />
                <span className="px-1">Ustawienia</span>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings/medicaldata" className="d-inline-flex align-items-center">
                <FaNotesMedical />
                <span className="px-1">Dane medyczne</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => keycloakClient.authenticated ? keycloakClient.logout() : keycloakClient.login()} className="d-inline-flex align-items-center">
                <BiLogIn />
                <span className="px-1">{keycloakClient.authenticated ? "Wyloguj" : "Zaloguj się"}</span>
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/register"
                className="d-inline-flex align-items-center"
                >
                <IoIosPaper />
                <span className="px-1">Zarejestruj się</span>
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Inner.Collapse>
      </Container>
    </Inner>
  );
};

export default Navbar;
