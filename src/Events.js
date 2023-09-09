import React from "react";
import UseCounter from "./hooks/Use-counter";
function Events(){
     const count=UseCounter()
      return<div>
               <h1>{count}</h1>
                </div>
            
        }
    
export default Events;
// when we want to access the variable in object with in the class we should have to use the class.
// when we click the button inc function will becalled.