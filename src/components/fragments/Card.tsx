import { ReactChild, ReactChildren, Key, CSSProperties } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Card as Inner } from "react-bootstrap";

interface CardParams {
  className?: string,
  children?: ReactChild[] | ReactChildren[],
  style?: CSSProperties
}

const Card = (props: Readonly<CardParams>) => {
  const darkMode = useDarkMode();
  return <Inner className={props.className} bg={`custom-${darkMode ? "dark" : "light"}`} style={props.style}>{props.children}</Inner>;
};

export default Card;
