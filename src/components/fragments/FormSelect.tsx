import React from "react";
import { FormGroup, Form } from "react-bootstrap";

interface FormSelectParams {
  id?: string,
  className?: string,
  label?: string,
  required?: boolean,
  options?: string[],
  value?: string | number,
  onChange?: React.ChangeEventHandler<HTMLSelectElement>,
  disabled?: boolean
}

const FormSelect = (props: Readonly<FormSelectParams>) => {
  let count = 0;

  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label>{props.label}</Form.Label> : ""}
      <Form.Select required={props.required} value={props.value} onChange={props.onChange} disabled={props.disabled}>
        {props.options ? props.options.map(opt => (
          <option key={count} value={count++}>{opt}</option>
        )) : ""}
      </Form.Select>
    </FormGroup>
  );
};

export default FormSelect;
