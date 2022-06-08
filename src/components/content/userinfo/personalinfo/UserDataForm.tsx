import { useState, FormEvent } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../../apiCalls/userCalls";
import FormControl from "../../../fragments/forms/FormControl";
import Button from "../../../fragments/util/Button";

export interface UserDataFormParams {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  birthDate: string;
  phoneNumber: string;
  disabled?: boolean;
  buttonLabel: string;
  link: string;
  edit?: boolean;
  passwordCheck?: string;
}

const UserDataForm = (props: Readonly<UserDataFormParams>) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [username, setUsername] = useState(props.username);
  const [password, setPassword] = useState(props.password);
  const [birthDate, setBirthDate] = useState(props.birthDate);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [edit, setEdit] = useState(props.edit);
  const [passwordCheck, setPasswordCheck] = useState(props.passwordCheck);

  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    updateUser(1, {
      firstName: firstName,
      lastName: lastName,
      birthDate: new Date(birthDate),
      phone: phoneNumber
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));

    navigate(props.link);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <FormControl
            id="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
            className="mb-3"
            value={firstName}
            label="Imię"
            type="text"
            disabled={props.disabled}
          />
        </Col>
        <Col>
          <FormControl
            id="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
            className="mb-3"
            value={lastName}
            label="Nazwisko"
            type="text"
            disabled={props.disabled}
          />
        </Col>
      </Row>
      <Row md={2}>
        <FormControl
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3"
          value={email}
          label="Email"
          type="email"
          disabled={props.disabled}
        />
        <FormControl
          id="phoneNumber"
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mb-3"
          value={phoneNumber}
          label="Numer telefonu"
          type="text"
          disabled={props.disabled}
        />
      </Row>

      <FormControl
        id="username"
        required
        onChange={(e) => setUsername(e.target.value)}
        className="mb-3"
        value={username}
        label="Nazwa użytkownika"
        type="text"
        disabled={props.disabled}
      />

      <FormControl
        id="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        className="mb-3"
        value={password}
        label="Hasło"
        type="password"
        disabled={props.disabled}
      />
      {edit && (
        <FormControl
          id="passwordCheck"
          required
          onChange={(e) => setPasswordCheck(e.target.value)}
          className="mb-3"
          value={passwordCheck}
          label="Powtórz hasło"
          type="password"
          disabled={props.disabled}
        />
      )}

      <FormControl
        id="birthDate"
        required
        onChange={(e) => setBirthDate(e.target.value)}
        className="mb-3"
        value={birthDate}
        label="Data urodzenia"
        type="date"
        disabled={props.disabled}
      />
      <Button text={props.buttonLabel} type={props.disabled ? "button" : "submit"} onClick={() => props.disabled ? navigate(props.link) : null} />
    </Form>
  );
};

export default UserDataForm;
