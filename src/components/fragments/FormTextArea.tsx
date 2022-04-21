import React from "react";
import { FormGroup, Form } from "react-bootstrap";

interface FormTextAreaParams {
  id?: string,
  className?: string,
  label?: string,
  rows?: number,
  cols?: number,
  value?: string | number,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>,
  disabled?: boolean
}

const FormTextArea = (props: Readonly<FormTextAreaParams>) => {
  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label>{props.label}</Form.Label> : ""}
      <textarea id={props.id} className="form-control" rows={props.rows} cols={props.cols} value={props.value} onChange={props.onChange} disabled={props.disabled} />
    </FormGroup>
  );
};

export default FormTextArea;
