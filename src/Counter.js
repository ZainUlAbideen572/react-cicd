
import React from "react"
import { useState } from "react"
function Counter(){
    const[count,setcount]=useState(100)
function inc(){
        setcount(count+1)
    }
    function dec(){
        setcount(count-1)
    }
    return<div>
        <h1>count:{count}</h1>
        <button onClick={inc}className="btn btn-success m-3">++</button>
        <button onClick={dec}className="btn btn-success m-3">--</button>    
    </div>
}
export default Counter;