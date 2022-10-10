import { ReactChild, ReactChildren } from "react";
import { Row } from "react-bootstrap";

export interface FormRowParams {
  xs?: number,
  className?: string,
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

const FormRow = (props: Readonly<FormRowParams>) => {
  return <Row xs={props.xs} className={`justify-content-center mb-3 ${props.className}`}>{props.children}</Row>;
};

export default FormRow;
