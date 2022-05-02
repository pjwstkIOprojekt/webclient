import { Path, Navigate } from "react-router-dom";

export interface ConditionalRouteParams {
  condition: boolean,
  element: JSX.Element,
  alt?: string | Partial<Path>
}

const ConditionalRoute = (props: Readonly<ConditionalRouteParams>) => {
  return props.condition ? props.element : <Navigate replace to={props.alt ? props.alt : "/"} />;
};

export default ConditionalRoute;
