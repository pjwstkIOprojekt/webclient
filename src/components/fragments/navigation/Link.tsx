import { NavBaseParams } from "./sharedNavigationParams";
import { Link as Inner } from "react-router-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";

const Link = (props: Readonly<NavBaseParams>) => {
  const darkMode = useDarkMode();
  return <Inner to={props.to} className={`link-${darkMode ? "dark" : "light"} ${props.className}`}>{props.children}</Inner>;
};

export default Link;
