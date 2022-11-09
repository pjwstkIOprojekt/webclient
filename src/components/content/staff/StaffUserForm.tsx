import { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { registerUser } from "../../../api/authCalls";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import FormPhoneNumber from "../../fragments/forms/FormPhoneNumber";
import FormSelect from "../../fragments/forms/FormSelect";
import Button from "../../fragments/util/Button";
import NavButton from "../../fragments/navigation/NavButton";
import { useTranslation } from "react-i18next";

const StaffUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (userId !== undefined) {
      /*getUserById(parseInt(userId)).then(res => res.json()).then(data => {
        // Update data here
      }).catch(err => console.log(err));*/
    }
  }, [userId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId === undefined) {
      registerUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        birthDate: birthDate,
        phoneNumber: phoneNumber
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    } else {
      /*updateUser(parseInt(userId), {
        firstName: firstName,
        lastName: lastName
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));*/
    }

    navigate("../staff");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{`${userId === undefined ? t('AddingEmployee') : t('EditingEmployee')} `}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormControl id="firstName" onChange={e => setFirstName(e.target.value)} value={firstName} required className="mb-3 w-50" label={t('Person.FirstName')} />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="lastName" onChange={e => setLastName(e.target.value)} value={lastName} required className="mb-3 w-50" label={t('Person.LastName')} />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="email" onChange={e => setEmail(e.target.value)} value={email} required className="mb-3 w-50" label="Email" type="email" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="password" onChange={e => setPassword(e.target.value)} value={password} required className="mb-3 w-50" label="Hasło" type={t('Login.Password')} />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="birthDate" onChange={e => setBirthDate(e.target.value)} value={birthDate} required className="mb-3 w-50" label={t('Person.Birthdate')} type="date" />
        </Row>
        <Row className="justify-content-center">
          <FormPhoneNumber id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} required value={phoneNumber} className="mb-3 w-50" label={t('Person.PhoneNumber')} />
        </Row>
        <Row className="justify-content-center">
          <FormSelect id="staffType" onChange={e => null} value={0} className="mb-3 w-50" label={t('Person.TypeEmployee')} allValid options={[t('Person.Dispatcher'), t('Person.Manager'), t('Person.Paramedic')]} />
        </Row>
        <Row className="justify-content-center">
          <Button className="my-3 w-25" type="submit">{userId === undefined ? t('Add') : t('Save')}</Button>
        </Row>
        <Row className="justify-content-center">
          <NavButton className="mb-3 w-25" to="../staff">{t('Cancel')}</NavButton>
        </Row>
      </Form>
    </Container>
  );
}

export default StaffUserForm;
