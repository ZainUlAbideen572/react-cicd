import React from "react";
import { useNavigate } from "react-router-dom";
// import Events from "./Events";

const Home=()=>{
    const navigate=useNavigate()
return<div>
    <h1>home</h1>
    <button onClick={()=>navigate('/about')}>redirecting</button>
    
</div>
}
export default Home;