import React from "react";
class Newcredential extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      brand:'',

    }
  }
  
        
    
    changehandler=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    submithandler=(e)=>{
        e.preventDefault();
        console.log(this.State)
    }
    render(){
        return<form onSubmit={this.submithandler}>
             <div class="mb-3">
          <label for="name" class="form-label">name</label>
          <input type="text" class="form-control" id="name"  onchange={this.changehandler} />
        </div>
        <div>
          <label for="brand" class="form-label">brand</label>
          <input type="text" class="form-control" id="brand" onchange={this.changehandler}/>
          </div>
          <button>
            submit
          </button>
        </form>
    }
}
export default Newcredential;