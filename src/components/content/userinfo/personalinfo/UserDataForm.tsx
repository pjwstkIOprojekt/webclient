import { useState, useEffect, FormEvent } from "react";
import { getUserById, updateUser } from "../../../../api/userCalls";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../../fragments/forms/FormControl";
import FormPhoneNumber from "../../../fragments/forms/FormPhoneNumber";
import Button from "../../../fragments/util/Button";

const UserDataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [readOnly, setReadOnly] = useState(true);

  useEffect(() => {
    getUserById(0).then(res => res.json()).then(data => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setUsername(data.username);
      setBirthDate(data.birthDate);
      setPhoneNumber(data.phone);
    }).catch(err => console.log(err));
  }, []);

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (!readOnly) {
      const isPasswordValid = password === passwordCheck;
      setPasswordError(isPasswordValid ? "" : "Powtórzone hasło różni się od oryginalnego");

      if (!isPasswordValid) {
        return;
      }

      updateUser(0, {
        firstName: firstName,
        lastName: lastName,
        username: username,
        birthDate: new Date(birthDate),
        phone: phoneNumber
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    }

    setReadOnly(!readOnly);
    setPasswordCheck("");
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">Ustawienia</h1>
      <Form onSubmit={onSubmit}>
        <Row md={2}>
          <FormControl id="firstName" required onChange={(e) => setFirstName(e.target.value)} className="mb-3" value={firstName} label="Imię" disabled={readOnly} />
          <FormControl id="lastName" required onChange={(e) => setLastName(e.target.value)} className="mb-3" value={lastName} label="Nazwisko" disabled={readOnly} />
        </Row>
        <Row md={2}>
          <FormControl id="email" required onChange={(e) => setEmail(e.target.value)} className="mb-3" value={email} label="Email" type="email" disabled={readOnly} />
          <FormPhoneNumber id="phoneNumber" required onChange={(e) => setPhoneNumber(e.target.value)} className="mb-3" value={phoneNumber} label="Numer telefonu" disabled={readOnly} />
        </Row>
        <FormControl id="username" required onChange={(e) => setUsername(e.target.value)} className="mb-3" value={username} label="Nazwa użytkownika" disabled={readOnly} />
        <FormControl id="password" required onChange={(e) => setPassword(e.target.value)} className="mb-3" value={password} label="Hasło" type="password" disabled={readOnly} />
        {readOnly ? "" : <FormControl id="passwordCheck" required onChange={(e) => setPasswordCheck(e.target.value)} className="mb-3" value={passwordCheck} label="Powtórz hasło" type="password" error={passwordError} />}
        <FormControl id="birthDate" required onChange={(e) => setBirthDate(e.target.value)} className="mb-3" value={birthDate} label="Data urodzenia" type="date" disabled={readOnly} />
        <Button type="submit">{readOnly ? "Edytuj" : "Zapisz"}</Button>
      </Form>
    </Container>
  );
};

export default UserDataForm;
