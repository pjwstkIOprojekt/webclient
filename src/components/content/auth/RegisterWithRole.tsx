import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAbort } from "../../../hooks/useAbort";
import { registerEmployee } from "../../../api/adminCalls";
import { Container, Row } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { RoleName } from "../../../api/enumCalls";
import NotBlank from "../../fragments/forms/api/NotBlank";
import Email from "../../fragments/forms/api/Email";
import Past from "../../fragments/forms/api/Past";
import FormPhoneNumber from "../../fragments/forms/FormPhoneNumber";
import Password from "../../fragments/forms/api/Password";
import Calendar from "../../fragments/util/Calendar";
import Submit from "../../fragments/forms/Submit";
import Error from "../../fragments/forms/Error";

const RegisterWithRole = () => {
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState<string | undefined>("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const abort = useAbort();

  const handleSubmit = () => {
    if (password !== passwordCheck) {
      setError("Error.DifferentPasswords");
      return;
    }

    setError(undefined);

    registerEmployee(role, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthDate: birthDate,
      phoneNumber: phoneNumber,
      workSchedule: {
        "MONDAY": { start: "", end: "" },
        "TUESDAY": { start: "", end: "" },
        "WEDNESDAY": { start: "", end: "" },
        "THURSDAY": { start: "", end: "" },
        "FRIDAY": { start: "", end: "" }
      }
    }, abort).then(res => {
      if (res.ok) {
        navigate("/");
      } else {
        console.log(res);
        setError("Error.RegistrationFailed");
      }
    }).catch(err => {
      if (abort.signal.aborted) {
        return;
      }
      
      console.error(err);
      setError("Error.RegistrationFailed");
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{t("Person.Adding")}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <EnumSelect id="role" required onChange={e => setRole(e.target.value)} onLoad={setRole} value={role} enum={RoleName} className="mb-3 w-50" label={t("Person.Role")} />
        </Row>
        <Row className="justify-content-center">
          <NotBlank id="firstName" required onChange={e => setFirstName(e.target.value)} value={firstName} className="mb-3 w-50" label={t("Person.FirstName")} />
        </Row>
        <Row className="justify-content-center">
          <NotBlank id="lastName" required onChange={e => setLastName(e.target.value)} value={lastName} className="mb-3 w-50" label={t("Person.LastName")} />
        </Row>
        <Row className="justify-content-center">
          <Email id="email" required onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label={t("Person.Email")} />
        </Row>
        <Row className="justify-content-center">
          <Past id="birthDate" required onChange={e => setBirthDate(e.target.value)} value={birthDate} className="mb-3 w-50" label={t("Person.Birthdate")} />
        </Row>
        <Row className="justify-content-center">
          <FormPhoneNumber id="phoneNumber" required onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} className="mb-3 w-50" label={t("Person.PhoneNumber")} />
        </Row>
        <Row className="justify-content-center">
          <Password id="password" required onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label={t("Person.Password")} />
        </Row>
        <Row className="justify-content-center">
          <Password id="passwordCheck" required onChange={e => setPasswordCheck(e.target.value)} value={passwordCheck} className="mb-3 w-50" label={t("Password.Check")} />
        </Row>
        <h1 className="text-center">Grafik</h1>
        <Calendar />
        <Row className="justify-content-center">
          <Submit className="my-3 w-25" canSubmit={error !== undefined}>{t("Person.Add")}</Submit>
        </Row>
        <Row className="justify-content-center">
          <Error className="mb-3 w-50" error={error} />
        </Row>
      </Form>
    </Container>
  );
};

export default RegisterWithRole;
