import { useState, FormEvent } from "react";
import { Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import FormTextArea from '../../fragments/forms/FormTextArea';
import Button from '../../fragments/util/Button';

const DangerousVictim = () => {
  const [reason, setReason] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form className="mt-5 w-50" onSubmit={handleSubmit}>
      <h3>Niebezpieczny pacjent</h3>
      <Row>
          <FormControl id="firstName" className="mb-3" value="Jan" label="Imię" disabled />
      </Row>
      <Row>
          <FormControl id="lastName" className="mb-3 " value="Nowak" label="Nazwisko" disabled />
      </Row>
      <h4>Uzasadnienie zagrożenia:</h4>
      <FormTextArea value={reason} onChange={e => setReason(e.target.value)} />
      <Button className="mt-5 w-50 me-1" type="submit">Oznacz niebezpiecznego poszkodowanego</Button>
    </Form>
  );
};

export default DangerousVictim;
