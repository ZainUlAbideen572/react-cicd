import React from "react";
import axios from "axios"
import Error from "../Common/Error";
import Loader from "../Common/Loader";
import CredentialsList from "./CredentialsList";
class Credentials extends React.Component{
    state={
        Users:[],
        haserror:false,
        Loading:false
    }
    constructor(){
        super()
        axios.get('https://api.github.com/users')
        .then(res=>{
       this.setState({Users:res.data})
        })
        .catch(err=>{
            this.setState({haserror:true,Loading:true})
        })
        
    }
    render(){
        return<div>
       {this.state.haserror?<Error/>:null }
      {this.state.Loading?<Loader/>:null} 
      {this.state.Users.map(Credentials=><CredentialsList Credentials={Credentials}/>)}
        </div>
    }
}
export default Credentials;