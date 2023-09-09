import React from "react";
const Engineeringlist=(props)=>{
     const {Engineering}=props
    return <div>
        <div>
            <h1>{Engineering.name}</h1>
            <h3>{Engineering.jobs}</h3>
        </div>
    </div>
}
export default Engineeringlist;