import { To, Link } from "react-router-dom";
import { ReactChild, ReactChildren } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Nav } from "react-bootstrap";

export interface NavLinkParams {
  to: To,
  className?: string,
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

const NavLink = (props: Readonly<NavLinkParams>) => {
  const darkMode = useDarkMode();
  return <Nav.Link as={Link} to={props.to} className={`d-inline-flex align-items-center nav-link-${darkMode ? "dark" : "light"} ${props.className}`}>{props.children}</Nav.Link>;
};

export default NavLink;
