import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
    function Loginform (){
      const[User,setUser]=useState({
        email:"",
        // name:"",
        password:""
      })
      // const[hasserror,sethaserror]=useState(false) 
      const navigate=useNavigate()
   const onsave=async(evt)=>{
       try{
        console.log('logging in..')
         evt.preventDefault();
         const res=await axios.post("https://fsa-api-b4.onrender.com/api/users/signin",User)
         localStorage.setItem('user',JSON.stringify(res.data))
         navigate('/khans')
         console.log(res)
       }
       catch(err){
        console.log(err)
       }
    }
   const oninputchange=(evt)=>{
    const newUser={...User,[evt.target.name]:evt.target.value}
      setUser(newUser)
    }
    
        
          return<div>
            {/* <div className="alert alert-danger">
                    Wrong email or password */}
            {/* </div> */}
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
    {/* <label className="form-label" for="name">Name</label>
    <input  onChange={oninputchange} type="text" name="name" className="form-control" id="Name" placeholder="Enter Name" /> */}
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