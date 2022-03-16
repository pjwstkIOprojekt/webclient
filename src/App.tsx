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
  state: { color: number }

  constructor(props: {}) {
    super(props);

    this.state = {
      color: 0
    };
  }

  changeColor = () => {
    if (this.state.color > 4) {
      this.setState({
        color: 0
      });
    }
    else {
      this.setState({
        color: this.state.color + 1
      });
    }
  };

  getNavbarStyle = (id: number) => {
    switch (id) {
      case 1:
        return "success";
      case 2:
        return "warning";
      case 3:
        return "info";
      case 4:
        return "dark";
      default:
        return "light";
    }
  };

  getNavbarVariant = (id: number): "dark" | "light" => {
    switch (id) {
      case 4:
        return "dark";
      default:
        return "light";
    }
  };

  getButtonStyle = (id: number) => {
    switch (id) {
      case 1:
        return "warning";
      case 2:
        return "dark";
      case 3:
        return "dark";
      default:
        return "primary";
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar bg={this.getNavbarStyle(this.state.color)} variant={this.getNavbarVariant(this.state.color)} expand="lg">
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
            <Button variant={this.getButtonStyle(this.state.color)} onClick={this.changeColor}>Zmień kolor</Button>
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
