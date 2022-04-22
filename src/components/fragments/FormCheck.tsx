import React from "react";
import { FormGroup, Form } from "react-bootstrap";

interface FormCheckParams {
  id?: string,
  className?: string,
  label?: string,
  required?: boolean,
  value?: string | number | boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  disabled?: boolean
}

const FormCheck = (props: Readonly<FormCheckParams>) => {
  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label>{props.label}</Form.Label> : ""}
      <input id={props.id} required={props.required} type="checkbox" onChange={props.onChange} checked={props.value ? true : false} disabled={props.disabled} />
    </FormGroup>
  );
};

export default FormCheck;
