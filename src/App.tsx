import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Func from "./components/Func";
import Class from "./components/Class";

export default class App extends React.Component<any, any>
{
    constructor(props: any)
    {
        super(props);

        this.state = {
            value: "Test"
        };
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        this.setState({
            value: value
        });
    };

    render()
    {
        return (
            <main>
                <BrowserRouter>
                    <div>
                        <input onChange={this.onChange} id="val" value={this.state.value} />
                        <Link to={`/func/${this.state.value}`}>Func</Link>
                        <Link to={`/class/${this.state.value}`}>Class</Link>
                        <Routes>
                            <Route path="/" element={<br />} />
                            <Route path="/func/:value" element={<Func />} />
                            <Route path="/class/:value" element={<Class />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </main>
        );
    }
}