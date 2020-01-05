import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import SinglePost from "./components/SinglePost"

function App() {
    return (
        <Router>
            <Sidebar/>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/posts">
                    <Posts />
                </Route>
                <Route path="/:slug">
                    <SinglePost />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
