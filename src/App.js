import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import Content from "./components/Content";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
