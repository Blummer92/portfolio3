import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import More from "./More";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/more" component={More}/>
                </Switch>
            </main>
        );
    }
}
