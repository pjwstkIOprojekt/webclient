import { ChangeEventHandler, useState, useEffect } from "react";
import { FormGroup, Form } from "react-bootstrap";

export interface EnumRadioParams {
  enumGetter: () => Promise<Response>,
  enumName: string,
  className?: string,
  labelClass?: string,
  label?: string,
  innerClass?: string,
  required?: boolean,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  disabled?: boolean,
  value?: string,
  error?: string
}

const EnumRadio = (props: Readonly<EnumRadioParams>) => {
  const [values, setValues] = useState<string[]>([]);
  const getter = props.enumGetter;

  useEffect(() => {
    getter().then(res => res.json()).then((data: string[]) => setValues(data)).catch(console.error);
  }, [getter]);

  return (
    <FormGroup className={props.className}>
      {props.label ? <Form.Label className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      {values.map((val, index) => <Form.Check key={index} id={val} inline type="radio" label={val} className={props.innerClass} required={props.required} disabled={props.disabled} onChange={props.onChange} checked={val === props.value} />)}
      {props.error ? <span className="req">{props.error}</span> : ""}
    </FormGroup>
  );
};

export default EnumRadio;
