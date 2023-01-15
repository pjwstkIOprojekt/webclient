import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAbort } from "../../../../hooks/useAbort";
import { Container, Row } from "react-bootstrap";
import Form from "../../../fragments/forms/Form";
import NotBlank from "../../../fragments/forms/api/NotBlank";
import Email from "../../../fragments/forms/api/Email";
import Past from "../../../fragments/forms/api/Past";
import FormPhoneNumber from "../../../fragments/forms/FormPhoneNumber";
import Submit from "../../../fragments/forms/Submit";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";
import Error from "../../../fragments/forms/Error";

// Form for user data editing
const UserDataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | undefined>("");
  const [readOnly, setReadOnly] = useState(true);
  const { t } = useTranslation();
  const abort = useAbort();

  useEffect(() => {
    if (!readOnly) {
      return;
    }

    // TODO
  }, [readOnly]);

  const onSubmit = () => {
    if (readOnly) {
      setReadOnly(false);
      setError("");
      return;
    }

    // TODO
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{t("Person.UserData")}</h1>
      <Form onSubmit={onSubmit}>
        <Row md={2}>
          <NotBlank id="firstName" required onChange={(e) => setFirstName(e.target.value)} className="mb-3" value={firstName} label={t("Person.FirstName")} disabled={readOnly} />
          <NotBlank id="lastName" required onChange={(e) => setLastName(e.target.value)} className="mb-3" value={lastName} label={t("Person.LastName")} disabled={readOnly} />
        </Row>
        <Row md={2}>
          <Email id="email" required onChange={(e) => setEmail(e.target.value)} className="mb-3" value={email} label={t("Person.Email")} disabled={readOnly} />
          <FormPhoneNumber id="phoneNumber" required onChange={(e) => setPhoneNumber(e.target.value)} className="mb-3" value={phoneNumber} label={t("Person.PhoneNumber")} disabled={readOnly} />
        </Row>
        <Past id="birthDate" required onChange={(e) => setBirthDate(e.target.value)} className="mb-3" value={birthDate} label={t("Person.Birthdate")} disabled={readOnly} />
        <Submit canSubmit={error !== undefined}>{t(`Common.${readOnly ? "Edit" : "SaveChanges"}`)}</Submit>
        <NavButton to="password" className="mx-3">{t("Password.Change")}</NavButton>
        {readOnly ? "" : <Button type="button" onClick={e => setReadOnly(true)}>{t("Common.Cancel")}</Button>}
        <Error className="mt-3" error={error} />
      </Form>
    </Container>
  );
};

export default UserDataForm;
