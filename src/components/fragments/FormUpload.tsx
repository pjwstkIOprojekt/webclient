import { UploadButtonParams } from "./UploadButton";
import { FormGroup, Form } from "react-bootstrap";
import UploadButton from "./UploadButton";

export interface FormUploadParams extends UploadButtonParams {
  className?: string,
  label?: string
}

const FormUpload = (props: Readonly<FormUploadParams>) => {
  return (
    <FormGroup className={props.className}>
      {props.label ? <Form.Label htmlFor={props.id}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      <UploadButton {...props} />
    </FormGroup>
  );
};

export default FormUpload;
