import { useDarkModeManager } from "./hooks/useDarkMode";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Hello from "./components/Hello";
import Login from "./components/content/auth/Login";
import Register from "./components/content/auth/Register";
import UsersList from "./components/content/users/UsersList";
import UserForm from "./components/content/users/UserForm";
import DeleteUser from "./components/content/users/DeleteUser";

import { useState } from "react";

export default function App() {
  const darkMode = useDarkModeManager();
  const [temp, setTemp] = useState(false);

  return (
    <BrowserRouter>
      <Navbar bg={darkMode.isDark ? "warning" : "dark"} variant={darkMode.isDark ? "light" : "dark"} expand="lg">
        <Container>
          <Navbar.Brand>GARY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/hello/primary/primary/primary/primary/primary/primary">Primary</Nav.Link>
            <Nav.Link as={Link} to="/hello/secondary/secondary/secondary/secondary/secondary/secondary">Secondary</Nav.Link>
            <Nav.Link as={Link} to="/hello/success/success/success/success/success/success">Success</Nav.Link>
            <Nav.Link as={Link} to="/hello/danger/danger/danger/danger/danger/danger">Danger</Nav.Link>
            <Nav.Link as={Link} to="/hello/warning/warning/warning/warning/warning/warning">Warning</Nav.Link>
            <Nav.Link as={Link} to="/hello/info/info/info/info/info/info">Info</Nav.Link>
            <Nav.Link as={Link} to="/hello/light/light/light/light/light/light">Light</Nav.Link>
            <Nav.Link as={Link} to="/hello/dark/dark/dark/dark/dark/dark">Dark</Nav.Link>
            <Nav.Link as={Link} to="/hello/custom-1/custom-2/custom-3/custom-4/custom-5/custom-6">Custom</Nav.Link>
          </Nav>
          <Button variant={darkMode.isDark ? "dark" : "primary"} onClick={darkMode.toggle}>Zmień motyw</Button>
          <Button variant={darkMode.isDark ? "dark" : "primary"} onClick={() => setTemp(!temp)}>Zmień szablon</Button>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/hello/:style/:style2/:style3/:style4/:style5/:style6" element={<Hello variant={temp} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/addUser" element={<UserForm isNew={true} />} />
        <Route path="/editUser/:userId" element={<UserForm isNew={false} />} />
        <Route path="/deleteUser/:userId" element={<DeleteUser />} />
      </Routes>
    </BrowserRouter>
  );
}
