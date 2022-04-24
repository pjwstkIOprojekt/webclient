import { ChangeEventHandler } from "react";
import { FormGroup, Form } from "react-bootstrap";

interface FormTextAreaParams {
  id?: string,
  className?: string,
  label?: string,
  required?: boolean,
  rows?: number,
  cols?: number,
  value?: string | number | readonly string[],
  onChange?: ChangeEventHandler<HTMLTextAreaElement>,
  placeholder?: string,
  disabled?: boolean
}

const FormTextArea = (props: Readonly<FormTextAreaParams>) => {
  return (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label>{props.label}</Form.Label> : ""}
      <textarea id={props.id} required={props.required} className="form-control" rows={props.rows} cols={props.cols} value={props.value} onChange={props.onChange} placeholder={props.placeholder} disabled={props.disabled} />
    </FormGroup>
  );
};

export default FormTextArea;
