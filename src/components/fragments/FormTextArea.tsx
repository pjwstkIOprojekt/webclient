import React from "react";
import { FormGroup, Form, Row } from "react-bootstrap";

interface FormTextAreaParams {
  id?: string,
  className?: string,
  label?: string,
  rows?: number,
  cols?: number,
  value?: string | number,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>,
  disabled?: boolean,
  rowClass?: string
}

const FormTextArea = (props: Readonly<FormTextAreaParams>) => {
  const content = (
    <FormGroup controlId={props.id} className={props.className}>
      {props.label ? <Form.Label>{props.label}</Form.Label> : ""}
      <textarea id={props.id} className="form-control" rows={props.rows} cols={props.cols} value={props.value} onChange={props.onChange} disabled={props.disabled} />
    </FormGroup>
  );

  if (props.rowClass) {
    return (
      <Row className={props.rowClass}>
        {content}
      </Row>
    );
  }

  return content;
};

export default FormTextArea;
