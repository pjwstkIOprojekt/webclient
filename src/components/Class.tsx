import React from "react";
import { exampleData, examplePost } from "../apiCalls/exampleCalls";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

interface exampleState
{
    item: exampleData,
    // Elements can be optional
    result?: number
}

export default class Class extends React.Component<{}, exampleState>
{
    state: exampleState

    constructor(props: Readonly<{}>)
    {
        super(props);

        this.state = {
            item: {
                title: "",
                body: "",
                userId: 0
            },
            result: undefined
        };
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        const item = { ...this.state.item };
        // item[name] = value; TS doesn't like it

        // This solution is a bit retarded but TS wouldn't compile anything else... or I'm too dumb
        if (id == "title")
        {
            item.title = value;
        }
        else if (id == "body")
        {
            item.body = value;
        }
        else if (id == "userId")
        {
            item.userId = parseInt(value);
        }
        else
        {
            console.log(event.target);
        }

        this.setState({
            item: item,
            result: undefined
        });
    };

    onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        this.setState({
            result: -1
        });

        const item = this.state.item;
        console.log(item);
        const promise = examplePost(item);

        promise.then(res => res.json()).then(data => {
            this.setState({
                result: data.id
            });
        }, err => {
            console.log(err);

            this.setState({
                result: undefined
            });
        });
    };

    render()
    {
        const item = this.state.item;
        const result = this.state.result;

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Tytuł</Form.Label>
                    <Form.Control type="text" value={item.title} onChange={this.onChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="body">
                    <Form.Label>Zawartość</Form.Label>
                    <Form.Control type="text" value={item.body} onChange={this.onChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="userId">
                    <Form.Label>ID użytkownika</Form.Label>
                    <Form.Control type="number" value={item.userId} onChange={this.onChange} />
                </Form.Group>
                <Button variant="accept" type="submit">Wyślij</Button>
                {result ? <Alert key="0" variant="primary">{result < 0 ? "Przetwarzanie w toku..." : `Dane zostały przyjęte pod indeksem: ${result}`}</Alert> : ""}
            </Form>
        );
    }
}