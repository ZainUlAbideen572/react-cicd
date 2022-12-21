import React from "react";
import axios from "axios";
import Productitem from "./Productitem";

class ProductsList extends React.Component{
    state={
        response:{
            data:[],
            metadata:{}
        }
    }
   constructor(){
    super()
    axios.get('https://fsa-api-b4.onrender.com/api/products/page/3/limit/10')
    .then(res=>this.setState({response:res.data}))
    .catch(err=>{
        console.log(err)
    })
   }
render(){
    return<div>
     <h1>products</h1>
     {this.state.response.data.map(product=><Productitem product={product}/>)}
       
   </div>
}
}
export default ProductsList;