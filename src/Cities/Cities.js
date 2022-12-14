import React from "react";
import Citieslist from "./Citieslist";
const Cities=()=>{
     const data=[
        {id:1,Name:"hyderabad",rulingparty:"Rulingparty:Trs",Image:"https://cdn.siasat.com/wp-content/uploads/2022/11/biryanis-of-Hyderabad-ed-660x495.jpg"},
        {id:2,Name:"Mumbaii",rulingparty:"Rulingparty:Bjp",Image:"https://i0.wp.com/www.india-briefing.com/news/wp-content/uploads/2013/07/India-Briefing-Economy-of-Mumbai-Indias-Major-Commercial-Hub.jpg?ssl=1"},
        {id:3,Name:"kolkata",rulingparty:"Rulingparty:Tmc" ,Image:"https://images.unsplash.com/photo-1603813507806-0d311a6eecd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a29sa2F0YXxlbnwwfHwwfHw%3D&w=1000&q=80"}
       
     ]
     return<div>
        <h1>Three metropolitan citiess</h1>
        {data.map(Cities=> <Citieslist Cities={Cities}/>)}
        </div>
}
export default Cities;