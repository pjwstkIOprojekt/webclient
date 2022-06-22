import { To, NavLink } from "react-router-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Nav } from "react-bootstrap";

export interface NavTarget {
  to: To,
  text: string
}

export interface NavtabParams {
  links: NavTarget[]
}

const Navtab = (props: Readonly<NavtabParams>) => {
  const darkMode = useDarkMode();

  return (
    <Nav variant="tabs" className={`navtab-${darkMode ? "dark" : "light"}`}>
      {props.links.map((link, index) => (
        <Nav.Item key={index}>
          <Nav.Link as={NavLink} to={link.to} className={`navtab-link-${darkMode ? "dark" : "light"}`}>{link.text}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Navtab;
