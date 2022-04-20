import React from "react";
import { FormGroup, Form } from "react-bootstrap";

export interface FormControlParams {
  id?: string,
  className?: string,
  label?: string,
  required?: boolean,
  type?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  value?: string | string[] | number,
  placeholder?: string
}

const FormControl = (props: Readonly<FormControlParams>) => {
  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label>{props.label}</Form.Label> : ""}
      <Form.Control required={props.required} type={props.type ? props.type : "text"} onChange={props.onChange} value={props.value} placeholder={props.placeholder} />
    </FormGroup>
  );
};

export default FormControl;
