import { useState, useEffect, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import FormSelect from "../../../fragments/forms/FormSelect";
import FormTextArea from "../../../fragments/forms/FormTextArea";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";

const AllergyForm = () => {
  const [allergy, setAllergy] = useState(0);
  const [source, setSource] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const { allergyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (allergyId) {
      /*getInfoById(parseInt(allergyId)).then(res => res.json()).then(data => {
        setSource(data.name);
        setInfo(data.inst);
      }).catch(err => console.log(err));*/
    }
  }, [allergyId]);

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
    setError("");

    if (allergy === 0) {
      setError("Nie wybrano rodzaju alergii!");
      return;
    }

    e.preventDefault();
    //updateAllergies(allergyId ? parseInt(allergyId) : 0, source + " - " + info).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    navigate("../medicaldata");
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{allergyId ? "Edycja alergii" : "Dodawanie alergii"}</h1>
      <Form onSubmit={onSubmit}>
        <FormSelect className="mb-3" label="Rodzaj alergii" required value={allergy} onChange={e => setAllergy(parseInt(e.target.value))} options={["-- Wybierz rodzaj alergii --", "Wziewna", "Kontaktowa", "Pokarmowa", "Na jad"]} error={error} />
        <FormTextArea className="mb-3" label="Na co" rows={1} required value={source} onChange={e => setSource(e.target.value)} />
        <FormTextArea className="mb-3" label="Dodatkowe informacje" rows={1} value={info} onChange={e => setInfo(e.target.value)} />
        <Button className="m-2" type="submit">Zapisz</Button>
        <NavButton to="../medicaldata">Anuluj</NavButton>
      </Form>
    </Container>
  );
};

export default AllergyForm;
