import { useState } from "react";
import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useDarkModeManager } from "../../../../hooks/useDarkMode";
import FormControl from "../../../fragments/FormControl";
import Button from "../../../fragments/Button";

const user = [
  {name: "Imię nazwisko", value: "Jan Kowalski", link: "name"},
  {name: "Email", value: "jankowalski@email.com", link: "email"},
  {name: "Nazwa użytkownika", value: "jankowalski", link: "username"},
  {name: "Hasło", value: "*********", link: "password"},
  {name: "Data urodzenia", value: "12-12-2000", link: "birthday"},
  {name: "Numer telefonu", value: "333333333", link: "phonenumber"},
  
]

const UserData = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const darkMode = useDarkModeManager();
  return (
    <Container className="mt-5">
      <h1 className="mb-5">Twoje dane</h1>
      <ListGroup className="" >
        {user.map((item) => (
          <ListGroup.Item action variant={darkMode.isDark ? "dark" : ""}>
            <Link className="text-decoration-none text-dark" to={item.link}>
              <Row>
                <Col>
                  <small className="text-muted">{item.name}</small>
                </Col>
                <Col xs={4} md={6} lg={8}>{item.value}</Col>
                <Col className="d-flex flex-row-reverse">
                  <FaEdit className="text-muted" />
                </Col>
              </Row>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default UserData;
