import React from "react"
import { useNavigate } from "react-router-dom";
const About=()=>{
const navigate=useNavigate()
return<div>
    <h1>About</h1>
    <button onClick={()=>navigate(-1)}>go home</button>
</div>
}
export default About;