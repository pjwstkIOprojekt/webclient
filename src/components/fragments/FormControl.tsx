import { ChangeEventHandler } from "react";
import { FormGroup, Form } from "react-bootstrap";

interface FormControlParams {
  id?: string,
  className?: string,
  label?: string,
  required?: boolean,
  type?: string,
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  value?: string | number | string[],
  placeholder?: string,
  disabled?: boolean
}

const FormControl = (props: Readonly<FormControlParams>) => {
  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label>{props.label}</Form.Label> : ""}
      <Form.Control required={props.required} type={props.type ? props.type : "text"} onChange={props.onChange} value={props.value} placeholder={props.placeholder} disabled={props.disabled} />
    </FormGroup>
  );
};

export default FormControl;
