import React from "react";
const CredentialsList=({Credentials})=>{
  return<div>
    <h3>{Credentials.name}</h3>
    <img className="rounded-circle" src={Credentials.origin} width="200" height="200"/>
    </div>
}
export default CredentialsList;