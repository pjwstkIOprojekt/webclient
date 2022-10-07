import { To, Link } from "react-router-dom";
import { MouseEventHandler, ReactChild, ReactChildren } from "react";
import { NavDropdown } from "react-bootstrap";

export interface NavDropParams {
  to: To,
  className?: string,
  onClick?: MouseEventHandler<HTMLElement>,
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

const NavDrop = (props: Readonly<NavDropParams>) => {
  return <NavDropdown.Item as={Link} to={props.to} className={`d-inline-flex align-items-center ${props.className}`} onClick={props.onClick}>{props.children}</ NavDropdown.Item>;
};

export default NavDrop;
