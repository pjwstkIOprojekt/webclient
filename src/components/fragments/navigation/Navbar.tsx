import { useDarkModeManager } from "../../../hooks/useDarkMode";
import { Navbar as Inner, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaMedkit, FaBook, FaUserCircle, FaNotesMedical, FaUserSecret } from "react-icons/fa";
import CheckIn from "../../content/staff/CheckIn";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdSettings, IoIosPaper } from "react-icons/io";
import { isAuth, isDirector, isDispositor, keycloakClient, UserRole, setRole } from "../../../helpers/authHelper";
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
            <Nav.Link as={Link} to="/" className={`d-inline-flex align-items-center nav-link-${darkMode.isDark ? "dark" : "light"}`}>
              <FaHome />
              <span className="px-1">Strona główna</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/newreport" className={`d-inline-flex align-items-center nav-link-${darkMode.isDark ? "dark" : "light"}`}>
              <FaMedkit />
              <span className="px-1">Zgłoszenie</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/tutorial" className={`d-inline-flex align-items-center nav-link-${darkMode.isDark ? "dark" : "light"}`}>
              <FaBook />
              <span className="px-1">Poradniki</span>
            </Nav.Link>
          </Nav>

          <Nav>
            {isDispositor() ? <CheckIn /> : ""}
            <Nav.Link onClick={darkMode.toggle} className={`d-inline-flex align-items-center nav-link-${darkMode.isDark ? "dark" : "light"}`}>
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
              className={`nav-link-${darkMode.isDark ? "dark" : "light"}`} >
              {isAuth() ? (
                <>
                  <NavDropdown.Item as={Link} to="/settings/userdata" className="d-inline-flex align-items-center">
                    <IoMdSettings />
                    <span className="px-1">Ustawienia</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings/medicaldata" className="d-inline-flex align-items-center">
                    <FaNotesMedical />
                    <span className="px-1">Dane medyczne</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings/trustedperson" className="d-inline-flex align-items-center">
                    <FaUserSecret />
                    <span className="px-1">Osoba zaufana</span>
                  </NavDropdown.Item>
                </>
              ) : ""}
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => isAuth() ? keycloakClient.logout() : keycloakClient.login()} className="d-inline-flex align-items-center">
                <BiLogIn />
                <span className="px-1">{isAuth() ? "Wyloguj" : "Zaloguj się"}</span>
              </NavDropdown.Item>
              {isAuth() ? "" : (
                <NavDropdown.Item
                  as={Link}
                  to="/register"
                  className="d-inline-flex align-items-center"
                >
                  <IoIosPaper />
                  <span className="px-1">Zarejestruj się</span>
                </NavDropdown.Item>
              )}
              {isDirector() || isDispositor() ? (
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  className="d-inline-flex align-items-center"
                  onClick={e => setRole(UserRole.USER)}
                >
                  <span className="px-1">Użytkownik</span>
                </NavDropdown.Item>
              ) : ""}
              {isDispositor() ? "" : (
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  className="d-inline-flex align-items-center"
                  onClick={e => setRole(UserRole.DISPOSITOR)}
                >
                  <span className="px-1">Dyspozytor</span>
                </NavDropdown.Item>
              )}
              {isDirector() ? "" : (
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  className="d-inline-flex align-items-center"
                  onClick={e => setRole(UserRole.DIRECTOR)}
                >
                  <span className="px-1">Kierownik</span>
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Inner.Collapse>
      </Container>
    </Inner>
  );
};

export default Navbar;
