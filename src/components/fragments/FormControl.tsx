import React from "react";
import { FormGroup, Form } from "react-bootstrap";

interface FormControlParams {
  id?: string,
  className?: string,
  label?: string,
  required?: boolean,
  type?: string,
  onChange?: React.ChangeEventHandler,
  value?: string | string[] | number
}

export default function FormControl(props: Readonly<FormControlParams>) {
  return (
    <FormGroup controlId={props.id} className={props.className}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control required={props.required} type={props.type ? props.type : "text"} onChange={props.onChange} value={props.value} />
    </FormGroup>
  );
}
