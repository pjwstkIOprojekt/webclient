import { ParentComponentParams } from "../sharedParams";
import { CSSProperties } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Card as Inner } from "react-bootstrap";

export interface CardParams extends ParentComponentParams {
  style?: CSSProperties
}

const Card = (props: Readonly<CardParams>) => {
  const darkMode = useDarkMode();
  return <Inner className={props.className} bg={`custom-${darkMode ? "dark" : "light"}`} style={props.style}>{props.children}</Inner>;
};

export default Card;
