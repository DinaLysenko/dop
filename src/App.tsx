import React from 'react';
import './App.css';
import {Banknots} from "./dop-1/Banknots";
import {Students} from "./dop-2/Students";
import {FetchFoo} from "./dop-3/FetchFoo";
import TodolistApp from './dop22/TodolistApp';
import RouterApp from './dop23-24/RouterApp';





function App() {

    return (
        <div className="App">
            <RouterApp/>
            <Banknots/>
            <Students/>
            <FetchFoo/>
            <TodolistApp/>
        </div>
    );
}

export default App;
