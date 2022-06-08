import { ReactChild, ReactChildren } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Alert as Inner } from "react-bootstrap";

export interface AlertParams {
  className?: string,
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

const Alert = (props: Readonly<AlertParams>) => {
  const darkMode = useDarkMode();
  return <Inner className={props.className} variant={`custom-${darkMode ? "dark" : "light"}`}>{props.children}</Inner>;
};

export default Alert;
