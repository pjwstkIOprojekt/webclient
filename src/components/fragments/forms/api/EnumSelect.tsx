import { SelectControlParams } from "../sharedFormsParams";
import { EnumType } from "../../../../api/enumCalls";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FormGroup, Form } from "react-bootstrap";

export interface EnumSelectParams extends SelectControlParams {
  enum: EnumType
}

const EnumSelect = (props: Readonly<EnumSelectParams>) => {
  const [values, setValues] = useState<string[]>([]);
  const { t } = useTranslation();
  const getter = props.enum.getter;

  useEffect(() => {
    getter().then(res => res.json()).then((data: string[]) => setValues(data)).catch(console.error);
  }, [getter]);

  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      <Form.Select className={props.innerClass} required={props.required} value={props.value} onChange={props.onChange} disabled={props.disabled}>
        {values.map((opt, index) => <option key={index} value={opt}>{t(`${props.enum.name}.${opt}`)}</option>)}
      </Form.Select>
      {props.error ? <span className="req">{props.error}</span> : ""}
    </FormGroup>
  );
};

export default EnumSelect;
