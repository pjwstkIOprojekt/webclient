import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { registerStaff } from "../../../api/authCalls";
import { updateUser } from "../../../api/userCalls";
import { StaffType } from "../../../helpers/apiTypes";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import FormSelect from "../../fragments/forms/FormSelect";
import Button from "../../fragments/util/Button";

export interface StaffUserFormParams {
  userId?: number
}

const StaffUserForm = (props: Readonly<StaffUserFormParams>) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.userId === undefined) {
      registerStaff({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        birthDate: new Date(birthDate),
        phoneNumber: phoneNumber,
        staffType: StaffType.DISPOSITOR
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    } else {
      updateUser(props.userId, {
        firstName: firstName,
        lastName: lastName
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    }

    navigate("../staff");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{`${props.userId === undefined ? "Dodawanie" : "Edycja"} pracownika`}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormControl id="firstName" onChange={e => setFirstName(e.target.value)} value={firstName} className="mb-3 w-50" label="Imię" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="lastName" onChange={e => setLastName(e.target.value)} value={lastName} className="mb-3 w-50" label="Nazwisko" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="email" onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label="Email" type="email" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="username" onChange={e => setUsername(e.target.value)} value={username} className="mb-3 w-50" label="Nazwa użytkownika" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="password" onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="birthDate" onChange={e => setBirthDate(e.target.value)} value={birthDate} className="mb-3 w-50" label="Data urodzenia" type="date" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} className="mb-3 w-50" label="Numer telefonu" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormSelect id="staffType" value={0} className="mb-3 w-50" label="Rodzaj pracownika" options={["Dyspozytor", "Menadżer", "Ratownik"]} />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit">{props.userId === undefined ? "Dodaj pracownika" : "Zapisz zmiany"}</Button>
        </Row>
      </Form>
    </Container>
  );
}

export default StaffUserForm;
