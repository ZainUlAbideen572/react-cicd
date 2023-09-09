import React,{useState} from "react"
// import { Fragment } from "react"

  function test(){
    const[name,setname]=useState()
    const[email,setemail]=useState()
    const[password,setpassword]=useState()
    const[Loggedin,setLoggedin]=useState(false)
    const oninputchange=(e)=>{
        e.preventDefault();
        console.log(name,email,password)
        const userdata={
            name,email,password
        }
        localStorage.setItem('token-info',userdata)
        setemail('')
        setname('')
        setpassword('')
        setLoggedin(true)
    }
    const Logout=()=>{
        localStorage.removeItem('token-info')
        setLoggedin(false)
    }

  
  }
  return <div>
    <form onSubmit={oninputchange}>
    <label for="name">name</label>
    <input onChange={(e)=>setname(e.target.value)} type="name" name="name" className="form-control" id="name" placeholder="Enter name"/>
    <label for="email">Email address</label>
    <input onChange={(e)=>setemail(e.target.value)} type="email" name="email" className="form-control" id="Email" placeholder="Enter email"/>
    <label for="password">password</label>
    <input onChange={(e)=>setpassword(e.target.value)} type="password" name="password" className="form-control" id="password" placeholder="Enter password"/>
    <button type="submit">submit</button>
    </form>
  </div>