import React from "react";
class Autocounter extends React.Component{
    state={
        count:0
    }
    componentDidMount(){
        this.intreval=setInterval(()=>{
            console.log('updating count',this.state.count)
            this.setState({count:this.state.count+1})
        },2000)
        // console.log(this.state.count)
    }
    componentWillUnmount(){
        console.log('clearing')
        clearInterval(this.interval)

    }
    render(){
        return<div>

            <h3>Auto counter</h3>
            <h3>{this.state.count}</h3>
        </div>
    }
}
export default Autocounter;