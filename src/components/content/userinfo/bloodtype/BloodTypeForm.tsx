import { useState } from "react";
import { getEmail } from "../../../../helpers/authHelper";
import { updateBlood } from "../../../../api/medicalInfoCalls";
import Form from "../../../fragments/forms/Form";
import EnumRadio from "../../../fragments/forms/api/EnumRadio";
import { BloodType, RhType } from "../../../../api/enumCalls";
import Button from "../../../fragments/util/Button";

interface BloodTypeFormParams {
  id?: number,
  bloodType?: string,
  rhType?: string
}

const BloodTypeForm = (props: Readonly<BloodTypeFormParams>) => {
  const [group, setGroup] = useState(props.bloodType);
  const [rh, setRh] = useState(props.rhType);
  const [readOnly, setReadOnly] = useState(true);

  const onSubmit = () => {
    if (readOnly || !props.id || !group || !rh) {
      setReadOnly(!readOnly);
      console.log(props.id);
      return;
    }

    const email = getEmail();

    if (!email) {
      console.error("User email is undefined. Check Session Storage and verify that user is actually logged in.");
      return;
    }

    updateBlood(props.id, {
      userEmail: email,
      bloodType: group,
      rhType: rh
    }).then(res => {
      console.log(res.status);
      setReadOnly(true);
    }).catch(err => {
      console.error(err);
      setReadOnly(true);
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="mb-3">
        <h3>Grupa krwi</h3>
        <div>
          <EnumRadio labelClass="p-3" label="Grupa krwi:" enum={BloodType} onChange={e => setGroup(e.target.value)} value={group} disabled={readOnly} />
        </div>
        <div>
          <EnumRadio labelClass="p-3" label="Grupa Rh:" enum={RhType} onChange={e => setRh(e.target.value)} value={rh} disabled={readOnly} />
        </div>
        <Button type="submit">{readOnly ? "Edytuj" : "Zapisz"}</Button>
      </div>
    </Form>
  );
};

export default BloodTypeForm;
