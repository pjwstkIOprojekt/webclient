import { useState, FormEvent } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormTextArea from "../../../fragments/FormTextArea";
import FormUpload from "../../../fragments/FormUpload";
import Button from "../../../fragments/Button";

interface FormProps {
  buttonLabel: string,
  onSubmit: (ill: string, inst: string, file: string) => void
}

const MedicalConditionForm = (props: FormProps) => {
  const [ill, setIll] = useState("");
  const [inst, setInst] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(ill, inst, file);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormTextArea className="mb-3" label="Nazwa choroby" rows={1} value={ill} onChange={e => setIll(e.target.value)} />
      <FormTextArea className="mb-3" label="Jak udzielić pierwszej pomocy?" rows={1} value={inst} onChange={e => setInst(e.target.value)} />
      <FormUpload className="mb-3 d-flex flex-column" buttonClass="w-25" label="Skan diagnozy lekarskiej" value={file} onChange={e => setFile(e.target.value)} />
      <Button className="m-2" type="submit" text={props.buttonLabel} />
      <Button text="Wróć" type="button" onClick={e => navigate("/medicaldata")} />
    </Form>
  );
};

export default MedicalConditionForm;
