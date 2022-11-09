import { useState } from "react";
import { useLogin } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { registerUser, loginUser, JwtResponse } from "../../../api/authCalls";
import { unknownError, errorHeader } from "../sharedStrings";
import { Container, Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import NotBlank from "../../fragments/forms/api/NotBlank";
import Email from "../../fragments/forms/api/Email";
import Past from "../../fragments/forms/api/Past";
import FormPhoneNumber from "../../fragments/forms/FormPhoneNumber";
import Password from "../../fragments/forms/api/Password";
import Button from "../../fragments/util/Button";
import CAlert from "../../fragments/util/Alert";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const login = useLogin();
  const { t } = useTranslation();

  const handleSubmit = () => {
    if (password !== passwordCheck) {
      setError("Error.DiffrentPasswords");
      return;
    }

    const mail = email;
    const pass = password;

    registerUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthDate: birthDate,
      phoneNumber: phoneNumber
    }).then(res => {
      if (res.status !== 200) {
        setError("Error.RegistrationFailed");
        return;
      }

      let status = -1;

      loginUser({
        email: mail,
        password: pass
      }).then(res => {
        status = res.status;
        return res.json();
      }).then((data: JwtResponse) => {
        if (status === 200) {
          if (data.token && data.roles && data.email) {
            login(data.token, data.roles, data.email);
          } else {
            setError("Error.NoResponseServer");
          }
        } else {
          setError(unknownError);
        }
      }).catch(err => {
        console.error(err);
        setError(unknownError);
      });
    }).catch(err => {
      console.error(err);
      setError("Error.RegistrationFailed");
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{t("Login.Registration")}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <NotBlank id="firstName" required onChange={e => setFirstName(e.target.value)} value={firstName} className="mb-3 w-50" label={t("Person.FirstName")} />
        </Row>
        <Row className="justify-content-center">
          <NotBlank id="lastName" required onChange={e => setLastName(e.target.value)} value={lastName} className="mb-3 w-50" label={t("Person.LastName")} />
        </Row>
        <Row className="justify-content-center">
          <Email id="email" required onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label="Email" />
        </Row>
        <Row className="justify-content-center">
          <Past id="birthDate" required onChange={e => setBirthDate(e.target.value)} value={birthDate} className="mb-3 w-50" label={t("Person.Birthdate")} />
        </Row>
        <Row className="justify-content-center">
          <FormPhoneNumber id="phoneNumber" required onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} className="mb-3 w-50" label={t("Person.PhoneNumber")} />
        </Row>
        <Row className="justify-content-center">
          <Password id="password" required onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label={t("Login.Password")} />
        </Row>
        <Row className="justify-content-center">
          <Password id="passwordCheck" required onChange={e => setPasswordCheck(e.target.value)} value={passwordCheck} className="mb-3 w-50" label={t("Password.Check")} />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit">{t('Login.Sign up')}</Button>
        </Row>
        {error ? (
          <Row className="justify-content-center mt-5">
            <Alert variant="danger" className="w-50">
              <Alert.Heading>{t(errorHeader)}</Alert.Heading>
              <p>{t(error)}</p>
            </Alert>
          </Row>
        ) : ""}
        <Row className="justify-content-center mt-3 mb-5">
          <CAlert className="w-50">
            <Alert.Heading>{t("Login.CollectData")}</Alert.Heading>
            <p>{t("NecessaryData")}</p>
          </CAlert>
        </Row>
      </Form>
    </Container>
  );
};

export default Register;
