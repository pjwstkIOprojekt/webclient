import { IdControlParams } from "./sharedFormsParams";
import { FormGroup, Form } from "react-bootstrap";

export interface FormCheckParams extends IdControlParams<HTMLInputElement> {
  value?: string | number | boolean
}

const FormCheck = (props: Readonly<FormCheckParams>) => {
  return (
    <FormGroup className={props.className}>
      <Form.Check id={props.id} className={props.innerClass} required={props.required} label={<>{props.label}{props.required ? <span className="req">*</span> : ""}</>} onChange={props.onChange} checked={props.value ? true : false} disabled={props.disabled} />
      {props.error ? <span className="req">{props.error}</span> : ""}
    </FormGroup>
  );
};

export default FormCheck;
