import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap";
import FormSelect from "../../../fragments/FormSelect";
import FormTextArea from "../../../fragments/FormTextArea";
import Button from "../../../fragments/Button";

interface FormProps {
  buttonLabel: string,
  onSubmit: (all: number, src: string, info: string) => void
}

const AllergyForm = (props: FormProps) => {
  const [allergy, setAllergy] = useState(0);
  const [source, setSource] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(allergy, source, info);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormSelect className="mb-3" label="Rodzaj alergii" value={allergy} onChange={e => setAllergy(parseInt(e.target.value))} options={["-- Wybierz rodzaj alergii --", "Wziewna", "Kontaktowa", "Pokarmowa", "Na jad"]} />
      <FormTextArea className="mb-3" label="Na co" rows={1} value={source} onChange={e => setSource(e.target.value)} />
      <FormTextArea className="mb-3" label="Dodatkowe informacje" rows={1} value={info} onChange={e => setInfo(e.target.value)} />
      <Button className="m-2" type="submit" text={props.buttonLabel} />
      <Button text="Wróć" onClick={() => navigate("/userinfo")} />
    </Form>
  );
};

export default AllergyForm;
