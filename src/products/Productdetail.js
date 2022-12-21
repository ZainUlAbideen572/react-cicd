// Lifecyle events
// constructor:when the object gts created constructor is gonna execute first.
// component Did mount:this is the where component gets into dom or html
// shouldcomponent didupdate
// componentdidupdate
// componentunmount.
import React from "react";
import axios from "axios";
class ProductDetail extends React.Component{
    state={
        product:{
            reviews:[]
        }
    }

    async componentDidMount(){
      const res= await axios.get('https://fsa-api-b4.onrender.com/api/products/639be256f6cdd8e61b7ff1b0')
      this.setState({product:res.data})
      console.log(res)
    }
    render(){
            const{product}=this.state
        return<div>
<h1>User Reviews</h1>
            <h2>{product.brand} {product.model} </h2>
        
            <h1>{product.avgRating}</h1>
            <button className="btn btn-success m-3">
              Add to cart
            </button>
            <button className="btn btn-success m-3">
              Buy Now
            </button>
            {product.reviews.map(reviews=><div>
                <h3>{reviews.subject} {reviews.rating}*</h3>
                <h4>{new Date(reviews.updatedDate).toDateString()}</h4>
                </div>)}
        </div>
    }
}
export default ProductDetail;