import { useState, useEffect } from "react";
import { getEmail } from "../../../../helpers/authHelper";
import { getTrustedPersonByEmail, TrustedPersonResponse, createTrustedPerson, updateTrustedPerson } from "../../../../api/trustedPersonCalls";
import { Container, Row, Alert } from "react-bootstrap";
import Form from "../../../fragments/forms/Form";
import NotBlank from "../../../fragments/forms/api/NotBlank";
import Email from "../../../fragments/forms/api/Email";
import FormPhoneNumber from "../../../fragments/forms/FormPhoneNumber";
import Button from "../../../fragments/util/Button";

const TrustedPersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (!readOnly) {
      return;
    }

    const email = getEmail();

    if (!email) {
      console.error("User email is undefined. Check Session Storage and verify that user is actually logged in.");
      return;
    }
    
    getTrustedPersonByEmail(email).then(res => res.json()).then((data: TrustedPersonResponse) => {
      if (data.firstName && data.lastName && data.phone) {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email ?? "");
        setPhoneNumber(data.phone);
        setIsNew(false);
      }
    }).catch(err => {
      console.error(err);
      setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
    });
  }, [readOnly]);

  const onSubmit = () => {
    if (readOnly) {
      setReadOnly(false);
      return;
    }

    setError("");
    const userEmail = getEmail();

    if (!userEmail) {
      console.error("User email is undefined. Check Session Storage and verify that user is actually logged in.");
      return;
    }

    const person = {
      userEmail: userEmail,
      firstName: firstName,
      lastName: lastName,
      email: email ? email : null,
      phone: phoneNumber
    };

    (isNew ? createTrustedPerson(person) : updateTrustedPerson(person)).then(res => {
      if (res.status === 200) {
        setReadOnly(true);
      } else {
        console.log(res);
        setError("Wystąpił nieznany błąd. Spróbuj ponownie.");
      }
    }).catch(err => {
      console.error(err);
      setError("Wystąpił nieznany błąd. Spróbuj ponownie.");
    });
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">Osoba zaufana</h1>
      <Form onSubmit={onSubmit}>
        <Row md={2}>
          <NotBlank id="firstName" required onChange={e => setFirstName(e.target.value)} className="mb-3" value={firstName} label="Imię" disabled={readOnly} />
          <NotBlank id="lastName" required onChange={e => setLastName(e.target.value)} className="mb-3" value={lastName} label="Nazwisko" disabled={readOnly} />
        </Row>
        <Row md={2}>
          <Email id="email" onChange={e => setEmail(e.target.value)} className="mb-3" value={email} label="Email" disabled={readOnly} />
          <FormPhoneNumber id="phoneNumber" required onChange={e => setPhoneNumber(e.target.value)} className="mb-3" value={phoneNumber} label="Numer telefonu" disabled={readOnly} />
        </Row>
        <Button type="submit" className="mx-3">{readOnly ? "Edytuj" : "Zapisz"}</Button>
        {readOnly ? "" : <Button type="button" onClick={e => setReadOnly(true)}>Anuluj</Button>}
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

export default TrustedPersonForm;
