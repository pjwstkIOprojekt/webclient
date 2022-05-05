import { ChangeEventHandler } from "react";
import { FormGroup, Form } from "react-bootstrap";

export interface FormCheckParams {
  id?: string,
  className?: string,
  label?: string,
  innerClass?: string,
  required?: boolean,
  value?: string | number | boolean,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  disabled?: boolean
}

const FormCheck = (props: Readonly<FormCheckParams>) => {
  return (
    <FormGroup className={props.className}>
      <Form.Check id={props.id} className={props.innerClass} required={props.required} label={<>{props.label}{props.required ? <span className="req">*</span> : ""}</>} onChange={props.onChange} checked={props.value ? true : false} disabled={props.disabled} />
    </FormGroup>
  );
};

export default FormCheck;
