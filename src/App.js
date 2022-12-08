import React from "react";
import Name from "./components/Name";
import Greet from "./components/Greet";
import College from "./components/College"
import Email from "./components/Email";
import Sum from "./components/Sum";
function App(){
    return <div>
        <Name value="john"/>
        <Greet/>
        <Greet/>
        <Greet/>
        <Greet/>
        <College/>
        <Sum/>
        <Email value="mdzayan572@gmail.com"/>
        <Email value="abc123@gmail.com"/>
        <h1>react application</h1>
        </div>
 }
 export default App;