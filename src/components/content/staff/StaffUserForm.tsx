import { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../../api/userCalls";
import { registerStaff } from "../../../api/authCalls";
import { StaffType } from "../../../helpers/apiTypes";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import FormPhoneNumber from "../../fragments/forms/FormPhoneNumber";
import FormSelect from "../../fragments/forms/FormSelect";
import Button from "../../fragments/util/Button";

const StaffUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (userId !== undefined) {
      getUserById(parseInt(userId)).then(res => res.json()).then(data => {
        // Update data here
      }).catch(err => console.log(err));
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId === undefined) {
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
      updateUser(parseInt(userId), {
        firstName: firstName,
        lastName: lastName
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    }

    navigate("../staff");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{`${userId === undefined ? "Dodawanie" : "Edycja"} pracownika`}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormControl id="firstName" onChange={e => setFirstName(e.target.value)} value={firstName} required className="mb-3 w-50" label="Imię" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="lastName" onChange={e => setLastName(e.target.value)} value={lastName} required className="mb-3 w-50" label="Nazwisko" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="email" onChange={e => setEmail(e.target.value)} value={email} required className="mb-3 w-50" label="Email" type="email" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="username" onChange={e => setUsername(e.target.value)} value={username} required className="mb-3 w-50" label="Nazwa użytkownika" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="password" onChange={e => setPassword(e.target.value)} value={password} required className="mb-3 w-50" label="Hasło" type="password" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="birthDate" onChange={e => setBirthDate(e.target.value)} value={birthDate} required className="mb-3 w-50" label="Data urodzenia" type="date" />
        </Row>
        <Row className="justify-content-center">
          <FormPhoneNumber id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} required value={phoneNumber} className="mb-3 w-50" label="Numer telefonu" />
        </Row>
        <Row className="justify-content-center">
          <FormSelect id="staffType" value={0} className="mb-3 w-50" label="Rodzaj pracownika" allValid options={["Dyspozytor", "Menadżer", "Ratownik"]} />
        </Row>
        <Row className="justify-content-center">
          <Button className="my-3 w-25" type="submit">{userId === undefined ? "Dodaj pracownika" : "Zapisz zmiany"}</Button>
        </Row>
      </Form>
    </Container>
  );
}

export default StaffUserForm;
