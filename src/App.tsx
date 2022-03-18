import { useDarkMode } from "./hooks/useDarkMode";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Hello from "./components/Hello";
import UsersList from "./components/content/users/UsersList";
import UserForm from "./components/content/users/UserForm";
import DeleteUser from "./components/content/users/DeleteUser";

export default function App() {
  const darkMode = useDarkMode();

  return (
    <BrowserRouter>
      <Navbar bg={darkMode.isDark ? "dark" : "light"} variant={darkMode.isDark ? "dark" : "light"} expand="lg">
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
          </Nav>
          <Button variant={darkMode.isDark ? "warning" : "primary"} onClick={darkMode.toggle}>Zmień motyw</Button>
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
