import React,{createContext, useState} from "react";
import ComponentA from "./ComponentA";
export const store=createContext();
const App2=()=>{
//    const[data,setdata]=useState(0)
    const[form,setform]=useState([
        {
            brand:"puma",
            price:"1000"
        },
        {
            brand:"nike",
            price:"2000"
        }
    ])
    // const inc=()=>{
    //     setdata(data+1)
    // }
    return<div>
    <store.Provider value={[form,setform]}>
        <ComponentA/>
    </store.Provider>
        {/* <button onClick={inc}>++</button> */}
    </div>
}
export default App2;