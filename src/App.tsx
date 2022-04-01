import { useDarkModeManager } from "./hooks/useDarkMode";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
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
      <Navbar bg={darkMode.isDark ? "dark-first" : "dark-third"} variant={darkMode.isDark ? "light" : "dark"} expand="lg">
        <Container>
          <Navbar.Brand>GARY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/hello/first/second/third">Custom</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
          <Button variant={darkMode.isDark ? "dark-third" : "light-first"} onClick={darkMode.toggle}>Zmień motyw</Button>
          <Button variant={darkMode.isDark ? "dark-third" : "light-first"} onClick={() => setTemp(!temp)}>Zmień szablon</Button>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/hello/first/second/third" />}/>
        <Route path="/hello/:style/:style2/:style3" element={<Hello variant={temp} />} />
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
