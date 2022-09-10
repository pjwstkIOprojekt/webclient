import { useState, useEffect, FormEvent } from "react";
import { getInfoById, updateAllergies } from "../../../../api/medicalInfoCalls";
import { Form } from "react-bootstrap";
import FormSelect from "../../../fragments/forms/FormSelect";
import FormTextArea from "../../../fragments/forms/FormTextArea";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";

interface FormProps {
  allergyId?: number
}

const AllergyForm = (props: Readonly<FormProps>) => {
  const [allergy, setAllergy] = useState(0);
  const [source, setSource] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (props.allergyId !== undefined) {
      getInfoById(props.allergyId).then(res => res.json()).then(data => {
      }).catch(err => console.log(err));
    }
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.allergyId === undefined) {

    } else {
      updateAllergies(props.allergyId, source + " - " + info).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormSelect className="mb-3" label="Rodzaj alergii" value={allergy} onChange={e => setAllergy(parseInt(e.target.value))} options={["-- Wybierz rodzaj alergii --", "Wziewna", "Kontaktowa", "Pokarmowa", "Na jad"]} />
      <FormTextArea className="mb-3" label="Na co" rows={1} value={source} onChange={e => setSource(e.target.value)} />
      <FormTextArea className="mb-3" label="Dodatkowe informacje" rows={1} value={info} onChange={e => setInfo(e.target.value)} />
      <Button className="m-2" type="submit">{props.allergyId !== undefined ? "Potwierdź" : "Dodaj"}</Button>
      <NavButton to="../medicaldata">Wróć</NavButton>
    </Form>
  );
};

export default AllergyForm;
