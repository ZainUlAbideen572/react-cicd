import React from "react";
const CredentialsList=({Credentials})=>{
  return<div>
    <h3>{Credentials.login}</h3>
    <img className="rounded-circle" src={Credentials.avatar_url} width="200" height="200"/>
    </div>
}
export default CredentialsList;