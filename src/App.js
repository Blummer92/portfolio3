import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Main from "./Main";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderNavigation from "../src/HeaderNavigation";
import Form from "../src/Form";
import Body from "../src/Body";

const App = () => (
    <>
        <>
            <HeaderNavigation className="body"/>
            <Main/>
        </>
        <Jumbotron fluid>
            <h1 className="header">Welcome To React-Bootstrap</h1>
        </Jumbotron>
        <Jumbotron fluid>
            <Form className="header"/>
        </Jumbotron>
        <Body className="body"/>
    </>
);

export default App;
