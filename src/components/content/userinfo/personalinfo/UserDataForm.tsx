import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../../../../api/userCalls";
import { Form, Row } from "react-bootstrap";
import FormControl from "../../../fragments/forms/FormControl";
import Button from "../../../fragments/util/Button";

interface UserDataParams {
  userId: number,
  allowEdit?: boolean
}

const UserDataForm = (props: Readonly<UserDataParams>) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(props.userId).then(res => res.json()).then(data => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setUsername(data.username);
      setBirthDate(data.birthDate);
      setPhoneNumber(data.phone);
    }).catch(err => console.log(err));
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    updateUser(props.userId, {
      firstName: firstName,
      lastName: lastName,
      username: username,
      birthDate: new Date(birthDate),
      phone: phoneNumber
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));

    navigate("../userdata");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row md={2}>
        <FormControl id="firstName" required onChange={(e) => setFirstName(e.target.value)} className="mb-3" value={firstName} label="Imię" type="text" disabled={!props.allowEdit} />
        <FormControl id="lastName" required onChange={(e) => setLastName(e.target.value)} className="mb-3" value={lastName} label="Nazwisko" type="text" disabled={!props.allowEdit} />
      </Row>
      <Row md={2}>
        <FormControl id="email" required onChange={(e) => setEmail(e.target.value)} className="mb-3" value={email} label="Email" type="email" disabled={!props.allowEdit} />
        <FormControl id="phoneNumber" required onChange={(e) => setPhoneNumber(e.target.value)} className="mb-3" value={phoneNumber} label="Numer telefonu" type="text" disabled={!props.allowEdit} pattern="(\+[0-9]{2})?[0-9]{9}" />
      </Row>
      <FormControl id="username" required onChange={(e) => setUsername(e.target.value)} className="mb-3" value={username} label="Nazwa użytkownika" type="text" disabled={!props.allowEdit} />
      <FormControl id="password" required onChange={(e) => setPassword(e.target.value)} className="mb-3" value={password} label="Hasło" type="password" disabled={!props.allowEdit} />
      {props.allowEdit ? <FormControl id="passwordCheck" required onChange={(e) => setPasswordCheck(e.target.value)} className="mb-3" value={passwordCheck} label="Powtórz hasło" type="password" disabled={!props.allowEdit} /> : ""}
      <FormControl id="birthDate" required onChange={(e) => setBirthDate(e.target.value)} className="mb-3" value={birthDate} label="Data urodzenia" type="date" disabled={!props.allowEdit} />
      <Button type={props.allowEdit ? "submit" : "button"} onClick={e => navigate("edit")} disabled={props.allowEdit}>{props.allowEdit ? "Zapisz" : "Edytuj"}</Button>
    </Form>
  );
};

export default UserDataForm;
