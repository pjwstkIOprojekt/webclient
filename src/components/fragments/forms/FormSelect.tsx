import { ChangeEventHandler } from "react";
import { FormGroup, Form } from "react-bootstrap";

export interface FormSelectParams {
  id?: string,
  className?: string,
  label?: string,
  labelClass?: string,
  innerClass?: string,
  required?: boolean,
  options?: string[],
  allValid?: boolean,
  value?: string | number | string[],
  onChange?: ChangeEventHandler<HTMLSelectElement>,
  disabled?: boolean,
  error?: string
}

const FormSelect = (props: Readonly<FormSelectParams>) => {
  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      <Form.Select className={props.innerClass} required={props.required} value={props.value} onChange={props.onChange} disabled={props.disabled}>
        {props.options ? props.options.map((opt, index) => <option key={index} value={index === 0 && !props.allValid ? "" : index}>{opt}</option>) : ""}
      </Form.Select>
      {props.error ? <span className="req">{props.error}</span> : ""}
    </FormGroup>
  );
};

export default FormSelect;
