import { Navbar as Inner, Nav, Container, NavDropdown, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { handleLogout } from "../../helpers/authHelper";
import { useDarkModeManager } from "../../hooks/useDarkMode";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { IoIosPaper, IoMdSettings } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const darkMode = useDarkModeManager();

  return (
    <Inner
      bg={`navbar-${darkMode.isDark ? "dark" : "light"}`}
      variant={darkMode.isDark ? "dark" : "light"}
      expand="lg"
    >
      <Container fluid className="">
        <Inner.Brand className="px-5">GARY</Inner.Brand>
        <Inner.Toggle aria-controls="basic-navbar-nav" />
        <Inner.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="d-inline-flex align-items-center">
              <AiOutlineHome />
              <span className="px-1">Strona tymczasowa</span>
            </Nav.Link>
            <Nav.Link onClick={darkMode.toggle} className="d-inline-flex align-items-center">
              <HiOutlineLightBulb />
              <span className="px-1">Zmień motyw</span>
            </Nav.Link>
            <NavDropdown
              title={
                <span className="d-inline-flex align-items-center">
                  <FaUserCircle />
                  <span className="px-1">Konto</span>
                </span>
              }
            >
              <NavDropdown.Item as={Link} to="/" className="d-inline-flex align-items-center">
                <IoMdSettings />
                <span className="px-1">Ustawienia</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login" className="d-inline-flex align-items-center">
                <BiLogIn />
                <span className="px-1">Zaloguj się</span>
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/register"
                className="d-inline-flex align-items-center"
              >
                <IoIosPaper />
                <span className="px-1">Zarejestruj się</span>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout} className="d-inline-flex align-items-center">
                <BiLogOut />
                <span className="px-1">Wyloguj się</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Inner.Collapse>
      </Container>
    </Inner>
  );
};

export default Navbar;
