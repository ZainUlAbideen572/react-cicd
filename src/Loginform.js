import React from "react";
class Loginform extends React.Component{
    state={
        name:"",
        email:"",
        password:"",
        haserror:false,
        success:true
    }
    oncontrolchange=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value})
    }
    onsave=()=>{
        // this.setState({success:true,haserror:false})
        console.log(this.state)
    }
    render(){
        const{name,email,password}=this.state
          return<div>
            <form>
                <div>
            <label for="email">Email address</label>
    <input value={email} type="email" name="email" className="form-control" id="Email" placeholder="Enter email" onChange={this.oncontrolchange}/>
{!email?<div>

    <span className="text-danger">email required</span>
    </div>
              :null}
    </div>
    <div>
    <label className="form-label" for="name">Name</label>
    <input value={name} type="text" name="name" className="form-control" id="Name" placeholder="Enter Name" onChange={this.oncontrolchange}/>
    {!name?
    <div>
        <span className="text-danger">name required</span>
        </div>:null}
    </div>
    <div>
    <label className="form-label" for="password">Password</label>
    <input value={password} type="text" name="password" className="form-control" id="Password" placeholder="Enter password" onChange={this.oncontrolchange}/>
    {!password?
    <div>
        <span className="text-danger">passwordrequired</span>
        </div>:null}
    </div>
    <button onClick={this.onsave}className="btn btn-success">submit</button>
            </form>
          </div>
          
    }
}
export default Loginform;