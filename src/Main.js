import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../src/Home";
import About from "../src/About";
import More from "../src/More";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/More" component={More}/>
        </Switch>
    </main>
);

export default Main;