import { useParams } from "react-router-dom";

export default function Func()
{
    const { value } = useParams();
    return <h1>{value}</h1>;
}