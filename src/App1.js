import React, { useEffect, useState } from "react";
import Emoji from './emoji.json'
function App1(){
    const[Search,setSearch]=useState('')
    const[data,setData]=useState([]);
    useEffect(()=>{
        const lower=Emoji.filter(emoji=>emoji.title.toLowerCase().includes(Search.toLowerCase()))
        setData(lower)
    console.log(Search)
    },[Search])
    const onsave=(evt)=>{
        const newdata=[evt.target.value]
        setSearch(newdata)
        console.log(setSearch)
        // [evt.target.value]
    }
    console.log(Search)
    return<div>
        <center>
            <h1>Emoji Search</h1>
            <input type="text" name="Search" value={Search} onChange={onsave}/>
            {data.map(emoji=><div>
                <div className="card">
                <div className="card-title">
                <div className="card-body">  
            {emoji.symbol} {emoji.title}
            </div>
            </div>
            </div>
            </div>)}
            </center>
    </div>
}
export default App1;