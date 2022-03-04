import React from "react";
import { useParams } from "react-router-dom";

// You can use this function to pass router path params into a component during export
export default function withParams(Component: typeof React.Component)
{
    return (props: JSX.IntrinsicAttributes) => <Component {...props} params={useParams()} />;
}