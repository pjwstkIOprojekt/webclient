import { useState, FormEvent } from "react";
import { updateBloodType } from "../../../../api/medicalInfoCalls";
import { Form } from "react-bootstrap";
import FormRadio from "../../../fragments/forms/FormRadio";
import Button from "../../../fragments/util/Button";

interface BloodTypeFormParams {
  data: Record<string, any>
}

const BloodTypeForm = (props: Readonly<BloodTypeFormParams>) => {
  const [group, setGroup] = useState(props.data.group);
  const [rh, setRh] = useState(props.data.rh);
  const [readOnly, setReadOnly] = useState(true);

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (!readOnly) {
      updateBloodType(1, group + " " + rh).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    }

    setReadOnly(!readOnly);
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="mb-3">
        <h3>Grupa krwi</h3>
        <div>
          <FormRadio labelClass="p-3" label="Grupa krwi:" values={["A", "B", "AB", "O"]} onChange={e => setGroup(e.target.id)} value={group} disabled={readOnly} />
        </div>
        <div>
          <FormRadio labelClass="p-3" label="Grupa Rh:" values={["Rh+", "Rh-"]} onChange={e => setRh(e.target.id)} value={rh} disabled={readOnly} />
        </div>
        <Button type="submit">{readOnly ? "Edytuj" : "Zapisz"}</Button>
      </div>
    </Form>
  );
};

export default BloodTypeForm;
