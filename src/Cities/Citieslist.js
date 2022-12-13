import React from "react"
const Citieslist=({Cities})=>{
    return <div>
    <h3>{Cities.Name}</h3>
    <h3>{Cities.rulingparty}</h3>
    <img src={Cities.Image} alt="Indiancities" Width="400" height="200"/>
    </div>
}
export default Citieslist;