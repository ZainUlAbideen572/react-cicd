import React, { useEffect, useState } from "react";
import axios from "axios"
import Error from "../Common/Error";

import CredentialsList from "./CredentialsList";
  function Credentials() {
    const[Users,setUsers]=useState([{
      data:{}
   }])
      const[haserror,sethaserror]=useState(false)
    
useEffect(()=>{
axios.get(`https://localhost:4000/page/${1}/limit/${5}`)
    .then(response=>setUsers(response.data),sethaserror(false))
    .catch(haserror=>sethaserror(true))
    },[])
    const onprev=()=>{
      console.log('prev')}
    const onnext=()=>{
      console.log('next')}

        return<div>
       {haserror?<Error/>:null }
      {/* {this.state.Loading?<Loader/>:null}  */}
      <div className="row">
        <div className="col-1">
    <button onClick={onprev} className="btn btn-outline-secondary">
    <i class="fa-solid fa-chevron-left"></i></button>
        </div>
        <div className="col-1">
    <button onClick={onnext} className="btn btn-outline-secondary"> <i class="fa-solid fa-chevron-right "></i></button>
        </div>
      </div>
      {Users.map(Credentials=><CredentialsList Credentials={Credentials}/>)}
     
        </div>
    }

export default Credentials;