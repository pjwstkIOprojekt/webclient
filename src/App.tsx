import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Hello from "./components/Hello";
import UsersList from "./components/content/users/UsersList";
import UserForm from "./components/content/users/UserForm";
import DeleteUser from "./components/content/users/DeleteUser";
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
              <Nav.Link as={Link} to="/users">
                Zobacz użytkowników
              </Nav.Link>
              <Nav.Link as={Link} to="/addUser">
                Dodaj użytkownika
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
          <Route path="/users" element={<UsersList />} />
          <Route path="/addUser" element={<UserForm isNew={true} />} />
          <Route path="/editUser/:userId" element={<UserForm isNew={false} />} />
          <Route path="/deleteUser/:userId" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
