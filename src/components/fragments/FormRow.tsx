import React from "react";
import { Row } from "react-bootstrap";
import { FormControlParams } from "./FormControl";
import FormControl from "./FormControl";

export interface FormRowParams extends FormControlParams {
  rowClass?: string
}

const FormRow = (props: Readonly<FormRowParams>) => {
  return (
    <Row className={props.rowClass}>
      <FormControl {...props} />
    </Row>
  );
};

export default FormRow;
