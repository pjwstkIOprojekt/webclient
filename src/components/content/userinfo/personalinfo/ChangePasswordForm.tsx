import { useState, FormEvent } from "react";
import { Container, Form, Alert } from "react-bootstrap";
import FormControl from "../../../fragments/forms/FormControl";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";
import { useTranslation } from "react-i18next";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation("jezyk");

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
    const isPasswordValid = password === passwordCheck;
    setError(isPasswordValid ? "" : "Powtórzone hasło różni się od oryginalnego.");

    if (!isPasswordValid) {
      return;
    }

    //updateUser(0, {}).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{t('Password.Change')}</h1>
      <Form onSubmit={onSubmit}>
        <FormControl id="oldPassword" required onChange={e => setOldPassword(e.target.value)} className="mb-3" value={oldPassword} label={t('Password.Old')} type="password" />
        <FormControl id="password" required onChange={e => setPassword(e.target.value)} className="mb-3" value={password} label={t('Password.New')} type="password" />
        <FormControl id="passwordCheck" required onChange={e => setPasswordCheck(e.target.value)} className="mb-3" value={passwordCheck} label={t('Password.Check')} type="password" />
        <Button type="submit">{t('Password.Change')}</Button>
        <NavButton to="../userdata" className="mx-3">{t('Cancel')}</NavButton>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>{t('Error.Error')}</Alert.Heading>
            <p>{error}</p>
          </Alert>
        ) : ""}
      </Form>
    </Container>
  );
};

export default ChangePasswordForm;
