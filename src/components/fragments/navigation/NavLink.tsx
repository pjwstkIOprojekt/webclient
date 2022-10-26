import { NavBaseParams } from "./sharedNavigationParams";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Nav } from "react-bootstrap";

const NavLink = (props: Readonly<NavBaseParams>) => {
  const darkMode = useDarkMode();
  return <Nav.Link as={Link} to={props.to} className={`d-inline-flex align-items-center nav-link-${darkMode ? "dark" : "light"} ${props.className}`}>{props.children}</Nav.Link>;
};

export default NavLink;
