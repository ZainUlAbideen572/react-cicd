import React from "react";
import { useState } from "react";
function Events(){
    const [count,setcount]= useState(100)
     function inc(){
       setcount(count+1)
    }
       function dec(){
        setcount(count-1)
      }
      return<div>
              {/* <h1> hyderbad</h1> */}
               <h1>count:{count}</h1>
               <button onClick={inc}>++</button>
<button onClick={dec}>--</button>
            </div>
            
        }
    
export default Events;
// when we want to access the variable in object with in the class we should have to use the class.
// when we click the button inc function will becalled.