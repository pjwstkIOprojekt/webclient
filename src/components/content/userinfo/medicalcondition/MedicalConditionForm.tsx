import { useState, FormEvent, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInfoById, updateChronicDisease } from "../../../../api/medicalInfoCalls";
import { Container, Form } from "react-bootstrap";
import FormTextArea from "../../../fragments/forms/FormTextArea";
import FormUpload from "../../../fragments/forms/FormUpload";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";

const MedicalConditionForm = () => {
  const [name, setName] = useState("");
  const [inst, setInst] = useState("");
  const [file, setFile] = useState("");
  const { diseaseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (diseaseId) {
      getInfoById(parseInt(diseaseId)).then(res => res.json()).then(data => {
        setName(data.name);
        setInst(data.inst);
      }).catch(err => console.log(err));
    }
  }, []);

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
    updateChronicDisease(diseaseId ? parseInt(diseaseId) : 0, name + " - " + inst).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    navigate("../medicaldata");
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{diseaseId ? "Edycja choroby" : "Dodawanie choroby"}</h1>
      <Form onSubmit={onSubmit}>
        <FormTextArea className="mb-3" label="Nazwa choroby" required rows={1} value={name} onChange={e => setName(e.target.value)} />
        <FormTextArea className="mb-3" label="Jak udzielić pierwszej pomocy?" required rows={1} value={inst} onChange={e => setInst(e.target.value)} />
        <FormUpload className="mb-3 d-flex flex-column" buttonClass="w-25" label="Skan diagnozy lekarskiej" value={file} onChange={e => setFile(e.target.value)} />
        <Button className="m-2" type="submit">Zapisz</Button>
        <NavButton to="../medicaldata">Anuluj</NavButton>
      </Form>
    </Container>
  );
};

export default MedicalConditionForm;
