import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import FormRadio from "../../../fragments/FormRadio";
import Button from "../../../fragments/Button";

interface FormProps {
  buttonLabel: string;
  link: string,
  disabled: boolean
}

const BloodTypeForm = (props: FormProps) => {
  const [group, setGroup] = useState("A");
  const [rh, setRh] = useState("Rh+");
  const navigate = useNavigate();

  return (
    <Form>
      <div className="mb-3">
        <h3>Grupa krwi</h3>
        <div>
          <FormRadio labelClass="p-3" label="Grupa krwi:" values={["A", "B", "AB", "O"]} onChange={e => setGroup(e.target.id)} value={group} disabled={props.disabled} />
        </div>
        <div>
          <FormRadio labelClass="p-3" label="Grupa Rh:" values={["Rh+", "Rh-"]} onChange={e => setRh(e.target.id)} value={rh} disabled={props.disabled} />
        </div>
        <Button text={props.buttonLabel} onClick={e => navigate(props.link)} />
      </div>
    </Form>
  );
};

export default BloodTypeForm;
