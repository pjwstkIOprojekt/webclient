import { Path, Link as Inner } from "react-router-dom";
import { ReactChild, ReactChildren } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

export interface LinkParams {
  to: string | Partial<Path>,
  className?: string,
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

const Link = (props: Readonly<LinkParams>) => {
  const darkMode = useDarkMode();
  return <Inner to={props.to} className={`link-${darkMode ? "dark" : "light"} ${props.className}`}>{props.children}</Inner>;
};

export default Link;
