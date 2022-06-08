import UploadButton, { UploadButtonParams } from "../util/UploadButton";
import { FormGroup, Form } from "react-bootstrap";

export interface FormUploadParams extends UploadButtonParams {
  buttonClass?: string,
  label?: string,
  labelClass?: string
}

const FormUpload = (props: Readonly<FormUploadParams>) => {
  return (
    <FormGroup className={props.className}>
      {props.label ? <Form.Label htmlFor={props.id} className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      <UploadButton id={props.id} value={props.value} onChange={props.onChange} required={props.required} disabled={props.disabled} className={props.buttonClass} />
    </FormGroup>
  );
};

export default FormUpload;
