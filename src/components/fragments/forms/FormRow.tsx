import { ReactChild, ReactChildren } from "react";
import { Row } from "react-bootstrap";

export interface FormRowParams {
  className?: string,
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

const FormRow = (props: Readonly<FormRowParams>) => {
  return <Row className={`justify-content-center ${props.className}`}>{props.children}</Row>;
};

export default FormRow;
