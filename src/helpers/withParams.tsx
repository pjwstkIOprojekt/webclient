import { useParams } from "react-router-dom";

export default function withParams(Component: any)
{
    return (props: JSX.IntrinsicAttributes) => <Component {...props} params={useParams()} />;
}