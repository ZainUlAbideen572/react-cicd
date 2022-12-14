import React from "react";
import axios from "axios";
import Useritem from "./Useritems";
class Users extends React.Component{
    state={
        Users:[],
        haserror:false,
        loader:false
    }
   constructor(){
    super()
    axios.get('https://api.github.com/users')
    // axios library returns promise .
    // constructor cannot use async and await.
 .then(res=>{
    this.setState({Users:res.data})
    
 })
 .catch(err=>{
    this.setState({haserror:true,loading:true})
 })
   }
    render(){
    return<div>
        <h1>Users</h1>
        {this.state.haserror?
        <div className="alert alert-danger m-3">
            something went wrong try again
        </div>:null}
        {this.state.loader?
        <div className="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>:null}
        {this.state.Users.map(Users=><Useritem Users={Users}/>)}
    </div>
    }
}
export default Users;