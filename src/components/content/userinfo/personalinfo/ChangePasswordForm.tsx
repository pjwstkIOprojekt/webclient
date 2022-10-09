import { useState, FormEvent } from "react";
import { updateUser } from "../../../../api/userCalls";
import { Container, Form, Alert } from "react-bootstrap";
import FormControl from "../../../fragments/forms/FormControl";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
    const isPasswordValid = password === passwordCheck;
    setError(isPasswordValid ? "" : "Powtórzone hasło różni się od oryginalnego.");

    if (!isPasswordValid) {
      return;
    }

    updateUser(0, {}).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">Zmiana hasła</h1>
      <Form onSubmit={onSubmit}>
        <FormControl id="oldPassword" required onChange={e => setOldPassword(e.target.value)} className="mb-3" value={oldPassword} label="Stare hasło" type="password" />
        <FormControl id="password" required onChange={e => setPassword(e.target.value)} className="mb-3" value={password} label="Nowe hasło" type="password" />
        <FormControl id="passwordCheck" required onChange={e => setPasswordCheck(e.target.value)} className="mb-3" value={passwordCheck} label="Powtórz nowe hasło" type="password" />
        <Button type="submit">Zmień hasło</Button>
        <NavButton to="../userdata" className="mx-3">Anuluj</NavButton>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>Błąd</Alert.Heading>
            <p>{error}</p>
          </Alert>
        ) : ""}
      </Form>
    </Container>
  );
};

export default ChangePasswordForm;
