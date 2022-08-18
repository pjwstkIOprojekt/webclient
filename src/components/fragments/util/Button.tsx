import { MouseEventHandler, ReactChild, ReactChildren } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Button as Inner } from "react-bootstrap";

export interface ButtonParams {
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  outline?: boolean,
  type?: "button" | "reset" | "submit",
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

const Button = (props: Readonly<ButtonParams>) => {
  const darkMode = useDarkMode();
  return <Inner className={props.className} onClick={props.onClick} variant={`${props.outline ? "outline-" : ""}custom-${darkMode ? "dark" : "light"}`} type={props.type}>{props.children}</Inner>;
};

export default Button;
