import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Hello from "./components/Hello";
import Func from "./components/Func";
import Class from "./components/Class";
import { Navbar, Nav } from "react-bootstrap";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>GARY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Strona Główna
              </Nav.Link>
              <Nav.Link as={Link} to="/get">
                Zobacz dane
              </Nav.Link>
              <Nav.Link as={Link} to="/post">
                Prześlij dane
              </Nav.Link>
              {/* Alternative syntax */}
              {/* 
              <Link to="/" className="nav-link">
              Strona Główna
              </Link> */}
            </Nav>
            <Button>Zaloguj się</Button>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/get" element={<Func />} />
          <Route path="/post" element={<Class />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
