import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Patrick Sweet UD CISC275 with React Hooks and TypeScript Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>This is a h1</h1>
            <ul>
                <li>first thing</li>
                <li>second thing</li>
                <li>third thing</li>
            </ul>
            <img src="..\github.png" alt="the github logo" />
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <div className="first-rectangle"></div>
                    </Col>
                    <Col>
                        {" "}
                        <div className="second-rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
