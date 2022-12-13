import React from "react";
const Companylist=({Company})=>{

    return <div>
        
            <h3>
                {Company.Name}
            </h3>
            <h3>{Company.Origin}</h3>
            <img src={Company.image} width="400" height="300"/>
            </div>
}
export default Companylist;