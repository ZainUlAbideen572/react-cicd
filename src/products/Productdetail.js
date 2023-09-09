// Lifecyle events
// constructor:when the object gts created constructor is gonna execute first.
// component Did mount:this is the where component gets into dom or html
// shouldcomponent didupdate
// componentdidupdate
// componentunmount.
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const ProductDetail =()=>{
   const[product,setproduct]=useState({
  reviews:[]
})
useEffect(()=>{
  (()=>{
  const res=axios.get('https://fsa-api-b4.onrender.com/api/products')
    .then(res=>setproduct(res.data))
    console.log(res)
  }) ()
  },[])
          
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

export default ProductDetail;