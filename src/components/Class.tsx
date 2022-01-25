import React from "react";
import withParams from "../helpers/withParams";

interface Params
{
    value: string;
}

interface ExampleProps
{
    params: Params;
}

interface ExampleState
{
    value: string;
}

class Class extends React.Component<ExampleProps, ExampleState>
{
    constructor(props: ExampleProps)
    {
        super(props);
        const { value } = props.params;

        this.state = {
            value: value
        };
    }

    render()
    {
        return <h1>{this.state.value}</h1>;
    }
}

export default withParams(Class);