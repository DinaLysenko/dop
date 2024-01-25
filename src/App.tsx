import React from 'react';
import './App.css';
import {Banknots} from "./dop-1/Banknots";
import {Students} from "./dop-2/Students";
import {FetchFoo} from "./dop-3/FetchFoo";





function App() {

    return (
        <div className="App">
            <Banknots/>
            <Students/>
            <FetchFoo/>
        </div>
    );
}

export default App;
