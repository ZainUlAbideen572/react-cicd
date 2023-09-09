import React from "react";
function Operation(){
    var a=3
    var b=4;
    return <div>
       <h1>value is {a+b}</h1>
        <h1>value is {a*b}</h1>
    </div>
}
// if we want to jump into javascript in the middle of jsx we write the code within curly braces.
export default Operation;