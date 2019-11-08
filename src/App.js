import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Main from '../src/Main';
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderNavigation from "../src/HeaderNavigation";
import Form from "../src/Form";
import Body from "../src/Body";
import Home from "../src/Home";
import About from "../src/About";
import More from "../src/More";
import {BrowserRouter, Route } from "react-router-dom";

const App = () => <>
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
    <Body className="body">
        <BrowserRouter>
            <div>
                <Route exact={true} path='/'
                       render={() => <div className="App">
                    <Home/>
                </div>}/>
                <Route exact={true} path='/More'
                       render={() => <div className="App">
                    <More/>
                </div>}/>
                <Route exact={true} path='/About'
                       render={() => <div className="App">
                    <About/>
                </div>}/>
            </div>
        </BrowserRouter>

    </Body>
</>;

export default App;
