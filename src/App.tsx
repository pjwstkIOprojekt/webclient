import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Hello from "./components/Hello";
import Func from "./components/Func";
import Class from "./components/Class";

export default class App extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Container>
                    <Row>
                        <Col><Link to="/"><Button variant="primary">Strona główna</Button></Link></Col>
                        <Col><Link to="/get"><Button variant="secondary">Zobacz dane</Button></Link></Col>
                        <Col><Link to="/post"><Button variant="secondary">Prześlij dane</Button></Link></Col>
                    </Row>
                    <Row>
                        <Routes>
                            <Route path="/" element={<Hello />} />
                            <Route path="/get" element={<Func />} />
                            <Route path="/post" element={<Class />} />
                        </Routes>
                    </Row>
                </Container>
            </BrowserRouter>
        );
    }
}