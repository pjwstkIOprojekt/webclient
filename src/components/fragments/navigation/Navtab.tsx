import { To, NavLink } from "react-router-dom";
import { InnerClassParam } from "../sharedParams";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Nav } from "react-bootstrap";

export interface NavTarget {
  to: To,
  text: string
}

export interface NavtabParams extends InnerClassParam {
  links: NavTarget[],
  linkClass?: string
}

const Navtab = (props: Readonly<NavtabParams>) => {
  const darkMode = useDarkMode();

  return (
    <Nav variant="tabs" className={`navtab-${darkMode ? "dark" : "light"} ${props.className}`}>
      {props.links.map((link, index) => (
        <Nav.Item key={index} className={props.innerClass}>
          <Nav.Link as={NavLink} to={link.to} className={`navtab-link-${darkMode ? "dark" : "light"} ${props.linkClass}`}>{link.text}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Navtab;
