import React, { useState } from "react";
    function Loginform (){
      const[User,setUser]=useState({
        email:"",
        name:"",
        password:""
      })
  
   function onsave(evt){
        // this.setState({success:true,haserror:false})
        console.log('logging in..')
         evt.preventDefault();
    }
   const oninputchange=(evt)=>{
    const newUser={...User,[evt.target.name]:evt.target.value}
      setUser(newUser)
    }
    
        
          return<div>
            <form onSubmit={onsave}>
                <div>
            <label for="email">Email address</label>
    <input onChange={oninputchange} type="email" name="email" className="form-control" id="Email" placeholder="Enter email"/>
{/* {!email?<div>

    <span className="text-danger">email required</span>
    </div>
              :null} */}
    </div>
    <div>
    <label className="form-label" for="name">Name</label>
    <input  onChange={oninputchange} type="text" name="name" className="form-control" id="Name" placeholder="Enter Name" />
    {/* {!name?
    <div>
        <span className="text-danger">name required</span>
        </div>:null} */}
    </div>
    <div>
    <label className="form-label" for="password">Password</label>
    <input onChange={oninputchange} type="password" name="password" className="form-control" id="Password" placeholder="Enter password"/>
    {/* {!password?
    <div>
        <span className="text-danger">passwordrequired</span>
        </div>:null} */}
    </div>
    <button onClick={onsave}className="btn btn-success">submit</button>
            </form>
          </div>
          
    }

export default Loginform;