import { RadioControlParams } from "../sharedFormsParams";
import { EnumType } from "../../../../api/enumCalls";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FormGroup, Form } from "react-bootstrap";

export interface EnumRadioParams extends RadioControlParams {
  enum: EnumType,
  labelClass?: string,
  value?: string
}

const EnumRadio = (props: Readonly<EnumRadioParams>) => {
  const [values, setValues] = useState<string[]>([]);
  const { t } = useTranslation();
  const getter = props.enum.getter;

  useEffect(() => {
    getter().then(res => res.json()).then((data: string[]) => setValues(data)).catch(console.error);
  }, [getter]);

  return (
    <FormGroup className={props.className}>
      {props.label ? <Form.Label className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      {values.map((val, index) => <Form.Check key={index} value={val} id={val} inline type="radio" label={t(`${props.enum.name}.${val}`)} className={props.innerClass} required={props.required} disabled={props.disabled} onChange={props.onChange} checked={val === props.value} />)}
      {props.error ? <span className="req">{props.error}</span> : ""}
    </FormGroup>
  );
};

export default EnumRadio;
