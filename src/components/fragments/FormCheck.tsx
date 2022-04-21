import React from "react";
import { FormGroup, Form, Row } from "react-bootstrap";

interface FormCheckParams {
  id?: string,
  className?: string,
  label?: string,
  value?: string | number | boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  disabled?: boolean,
  rowClass?: string
}

const FormCheck = (props: Readonly<FormCheckParams>) => {
  const content = (
    <FormGroup controlId={props.id} className={props.className}>
      <Form.Check label={props.label} type="checkbox" checked={props.value ? true : false} onChange={props.onChange} disabled={props.disabled} />
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

export default FormCheck;
