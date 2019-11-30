import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Posts/>
        </div>
    );
}

export default App;
