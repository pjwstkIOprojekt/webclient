import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { updateBloodType } from "../../../../api/medicalInfoCalls";
import { Form } from "react-bootstrap";
import FormRadio from "../../../fragments/forms/FormRadio";
import Button from "../../../fragments/util/Button";

interface FormProps {
  buttonLabel: string;
  link: string,
  disabled: boolean
}

const BloodTypeForm = (props: FormProps) => {
  const [group, setGroup] = useState("A");
  const [rh, setRh] = useState("Rh+");
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateBloodType(1, group + " " + rh).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    navigate(props.link);
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="mb-3">
        <h3>Grupa krwi</h3>
        <div>
          <FormRadio labelClass="p-3" label="Grupa krwi:" values={["A", "B", "AB", "O"]} onChange={e => setGroup(e.target.id)} value={group} disabled={props.disabled} />
        </div>
        <div>
          <FormRadio labelClass="p-3" label="Grupa Rh:" values={["Rh+", "Rh-"]} onChange={e => setRh(e.target.id)} value={rh} disabled={props.disabled} />
        </div>
        <Button type={props.disabled ? "button" : "submit"} onClick={props.disabled ? e => navigate(props.link) : e => 3}>{props.buttonLabel}</Button>
      </div>
    </Form>
  );
};

export default BloodTypeForm;
