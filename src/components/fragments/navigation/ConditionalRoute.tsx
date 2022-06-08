import { To, Navigate } from "react-router-dom";

export interface ConditionalRouteParams {
  condition: boolean,
  element: JSX.Element,
  alt?: To
}

const ConditionalRoute = (props: Readonly<ConditionalRouteParams>) => {
  return props.condition ? props.element : <Navigate replace to={props.alt ? props.alt : "/"} />;
};

export default ConditionalRoute;
