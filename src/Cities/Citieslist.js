import React from "react"
const Citieslist=({Cities})=>{
    return <div className="col-md-4 off-md-1">
        <div className="card">
            <img src={Cities.Image} alt="Indiancities" Width="400" height="200"/>
            <div className="card-body">
                <div className="card-title">
                    {Cities.Name} {Cities.rulingparty}
                </div>
            </div>
        </div>
    {/* <h3>{Cities.Name}</h3>
    <h3>{Cities.rulingparty}</h3> */}
    </div>
}
export default Citieslist;