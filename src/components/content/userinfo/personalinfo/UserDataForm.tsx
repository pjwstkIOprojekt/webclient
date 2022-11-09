import { useState, useEffect, FormEvent } from "react";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../../fragments/forms/FormControl";
import FormPhoneNumber from "../../../fragments/forms/FormPhoneNumber";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";
import { useTranslation } from "react-i18next";

const UserDataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    /*getUserById(0).then(res => res.json()).then(data => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setUsername(data.username);
      setBirthDate(data.birthDate);
      setPhoneNumber(data.phone);
    }).catch(err => console.log(err));*/
  }, []);

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (!readOnly) {
      /*updateUser(0, {
        firstName: firstName,
        lastName: lastName,
        username: username,
        birthDate: new Date(birthDate),
        phone: phoneNumber
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));*/
    }

    setReadOnly(!readOnly);
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{t('Settings')}</h1>
      <Form onSubmit={onSubmit}>
        <Row md={2}>
          <FormControl id="firstName" required onChange={(e) => setFirstName(e.target.value)} className="mb-3" value={firstName} label={t('Person.FirstName')} disabled={readOnly} />
          <FormControl id="lastName" required onChange={(e) => setLastName(e.target.value)} className="mb-3" value={lastName} label={t('Person.LastName')} disabled={readOnly} />
        </Row>
        <Row md={2}>
          <FormControl id="email" required onChange={(e) => setEmail(e.target.value)} className="mb-3" value={email} label="Email" type="email" disabled={readOnly} />
          <FormPhoneNumber id="phoneNumber" required onChange={(e) => setPhoneNumber(e.target.value)} className="mb-3" value={phoneNumber} label={t('Person.PhoneNumber')} disabled={readOnly} />
        </Row>
        <FormControl id="username" required onChange={(e) => setUsername(e.target.value)} className="mb-3" value={username} label={t('Person.Nick')} disabled={readOnly} />
        <FormControl id="birthDate" required onChange={(e) => setBirthDate(e.target.value)} className="mb-3" value={birthDate} label={t('Person.Birthdate')} type="date" disabled={readOnly} />
        <Button type="submit">{readOnly ? "Edytuj" : "Zapisz"}</Button>
        <NavButton to="password" className="mx-3">{t('Password.Change')}</NavButton>
      </Form>
    </Container>
  );
};

export default UserDataForm;
