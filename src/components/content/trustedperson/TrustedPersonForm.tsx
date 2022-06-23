import { useState, FormEvent } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";

export interface TrustedPersonFormParams {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  disabled?: boolean;
  buttonLabel: string;
  link: string;
  edit?: boolean;
}

const TrustedPersonForm = (props: Readonly<TrustedPersonFormParams>) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [edit, setEdit] = useState(props.edit);

  const navigate = useNavigate();
  //navigate(props.link);
  
  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <FormControl
            id="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
            className="mb-3"
            value={firstName}
            label="Imię"
            type="text"
            disabled={props.disabled}
          />
        </Col>
        <Col>
          <FormControl
            id="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
            className="mb-3"
            value={lastName}
            label="Nazwisko"
            type="text"
            disabled={props.disabled}
          />
        </Col>
      </Row>
      <Row md={2}>
        <FormControl
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3"
          value={email}
          label="Email"
          type="email"
          disabled={props.disabled}
        />
        <FormControl
          id="phoneNumber"
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mb-3"
          value={phoneNumber}
          label="Numer telefonu"
          type="text"
          disabled={props.disabled}
        />
      </Row>
      <Button type={props.disabled ? "button" : "submit"} onClick={() => props.disabled ? navigate(props.link) : null}>{props.buttonLabel}</Button>
    </Form>
  );
  }

export default TrustedPersonForm;
