import { ChangeEventHandler } from "react";
import { FormGroup, Form } from "react-bootstrap";

export interface FormSelectParams {
  id?: string,
  className?: string,
  label?: string,
  labelClass?: string,
  innerClass?: string,
  required?: boolean,
  options?: readonly string[],
  value?: string | number | readonly string[],
  onChange?: ChangeEventHandler<HTMLSelectElement>,
  disabled?: boolean
}

const FormSelect = (props: Readonly<FormSelectParams>) => {
  let count = 0;

  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      <Form.Select className={props.innerClass} required={props.required} value={props.value} onChange={props.onChange} disabled={props.disabled}>
        {props.options ? props.options.map(opt => <option key={count} value={count++}>{opt}</option>) : ""}
      </Form.Select>
    </FormGroup>
  );
};

export default FormSelect;
