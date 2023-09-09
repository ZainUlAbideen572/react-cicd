import React from "react";
import Engineeringlist from "./Engineeringlist";
function Engineering(){
    const data=[
        {id:1,name:'cse',jobs:'it'},
        {id:2,name:'mech',jobs:'industries'},
        {id:3,name:'civil',jobs:'constrruction'}
    ]
    return<div>
        {data.map(Engineering=> <Engineeringlist Engineering={Engineering}/>)}
    </div>
}
export default Engineering; 