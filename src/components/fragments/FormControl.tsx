import { ChangeEventHandler } from "react";
import { FormGroup, Form } from "react-bootstrap";

export interface FormControlParams {
  id?: string,
  className?: string,
  label?: string,
  labelClass?: string,
  innerClass?: string,
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
      {props.label ? <Form.Label className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      <Form.Control required={props.required} className={props.innerClass} type={props.type ? props.type : "text"} onChange={props.onChange} value={props.value} placeholder={props.placeholder} disabled={props.disabled} />
    </FormGroup>
  );
};

export default FormControl;
