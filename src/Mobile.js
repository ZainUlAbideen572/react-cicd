import React, { useState } from "react";
function Mobile(){
    const[price,setprice]=useState(0)
    const[pixel,setpixel]=useState(20)
    function inc(){
       setprice(price+1)
    }
    function camera(){
      setpixel(pixel+1)
    }
    return<div>
        <h1>realme 8 pro</h1>
        <h3>price:{price}</h3>
        <div>
            <button onClick={inc}>++</button>
        </div>
        <h4>pixel:{pixel}</h4>
        <button onClick={camera}>++</button>
    </div>
}
export default Mobile;