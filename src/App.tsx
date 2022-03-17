import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Hello from "./components/Hello";
import UsersList from "./components/content/users/UsersList";
import UserForm from "./components/content/users/UserForm";
import DeleteUser from "./components/content/users/DeleteUser";
import { Navbar, Nav } from "react-bootstrap";

interface AppStatus {
  isDarkThemeEnabled: boolean
}

export default class App extends React.Component {
  state: AppStatus;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      isDarkThemeEnabled: false
    };
  }

  changeTheme = () => {
    this.setState({
      isDarkThemeEnabled: !this.state.isDarkThemeEnabled
    });
  };

  getNavbarStyle = () => {
    return this.state.isDarkThemeEnabled ? "dark" : "light";
  };

  getButtonStyle = () => {
    return this.state.isDarkThemeEnabled ? "warning" : "primary";
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar bg={this.getNavbarStyle()} variant={this.getNavbarStyle()} expand="lg">
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
            <Button variant={this.getButtonStyle()} onClick={this.changeTheme}>Zmień motyw</Button>
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
