import { ChangeEventHandler, useState } from "react";
import { FormGroup, Form } from "react-bootstrap";

export interface FormControlParams {
  id?: string,
  className?: string,
  label?: string,
  labelClass?: string,
  innerClass?: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  minValue?: string | number,
  maxValue?: string | number,
  type?: string,
  pattern?: string,
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  value?: string | number | string[],
  placeholder?: string,
  disabled?: boolean,
  error?: string
}

const FormControl = (props: Readonly<FormControlParams>) => {
  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      <Form.Control required={props.required} minLength={props.minLength} maxLength={props.maxLength} min={props.minValue} max={props.maxValue} pattern={props.pattern} className={props.innerClass} type={props.type ? props.type : "text"} onChange={props.onChange} value={props.value} placeholder={props.placeholder} disabled={props.disabled} />
      {props.error ? <span className="req">{props.error}</span> : ""}
    </FormGroup>
  );
};

export default FormControl;
