import React from "react";
import Companylist from "./Companylist";
const Company=()=>{
    const data=[
           {id:1,Name:'Wipro',Origin:'bangalore',image:'https://m.economictimes.com/thumb/msid-80288350,width-1200,height-900,resizemode-4,imgsize-287519/wipro.jpg'},
        {id:2,Name:'Tcs',Origin:"Mumbai",image:"https://sightsinplus.nyc3.digitaloceanspaces.com/sightsinplus/wp-content/uploads/2020/03/19065323/TCS-1.jpg"},
        {id:3,Name:"infosys",Origin:"bangalore",image:"https://images.moneycontrol.com/static-mcnews/2022/06/Untitled-design-7.png?impolicy=website&width=770&height=431"}
    ]
    return<div>
            <h3>Biggest Mncs</h3>
        {data.map(Company=><Companylist Company={Company}/>)}
    </div>


}
export default Company
