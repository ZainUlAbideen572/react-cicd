import React from "react";
class Events extends React.Component{
  constructor(props){
    super(props)
     this.state={
       count:props.count
     }
    
  }
      inc=()=>{
        const current=this.state.count
        this.setState({ count: current+1})
      }
      dec=()=>{
        const current=this.state.count
        this.setState({count:current-1})
      }
        render(){
            return(<div>
                <h1> hyderbad</h1>
                <h1>operation {this.state.count}</h1>
                
                <button onClick={this.inc}>++</button>
                <button onClick={this.dec}>--</button>
            </div>
            )
        }
    }
export default Events;
// when we want to access the variable in object with in the class we should have to use the class.
// when we click the button inc function will becalled.