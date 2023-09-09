import React,{useContext} from "react";
import  {store} from './App2'
function ComponentA(){
    const [form,setform]=useContext(store)
    
    return<div>
       {form.map(item=><div>
        {item.brand}
        </div>)}
     
    </div>
}
export default ComponentA;