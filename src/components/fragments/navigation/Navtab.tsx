import { To, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export interface NavTarget {
  to: To,
  text: string
}

export interface NavtabParams {
  links: NavTarget[]
}

const Navtab = (props: Readonly<NavtabParams>) => {
  return (
    <Nav variant="tabs">
      {props.links.map((link, index) => (
        <Nav.Item key={index}>
          <Nav.Link as={NavLink} to={link.to}>{link.text}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Navtab;
