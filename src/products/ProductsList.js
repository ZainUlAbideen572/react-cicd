import React, { useEffect, useState } from "react";
import axios from "axios";
import Productitem from "./Productitem";
import { Link } from "react-router-dom";

const ProductsList=()=>{
   
    const[response,setResponse]=useState({
        data:[],
        metadata:{}
    })
    const [haserror,sethaserror]=useState(false)
          useEffect(()=>{
            axios.get('https://fsa-api-b4.onrender.com/api/products/page/3/limit/10')
            .then(res=>setResponse(res.data),
            sethaserror(false))
            .catch(err=>{
               sethaserror(true)})
},[])
    
    const  onNext=()=>
        console.log('next')
   const onprev=()=>console.log('prev')
   return<div>
        <Link to="/Products/Productdetail/:id">
        <div className="row">
            <div className="col-2">
        <Link  to="/Products/new"className="btn btn-success">
            Add new product
            </Link>
        </div>
        <div className="col-1">
         <button onClick={onprev} className="btn btn-secondary">
         <i class="fa-solid fa-chevron-left"></i>
         </button>
        </div>
        <div className="col-1">
       <button onClick={onNext}className="btn btn-secondary">
       <i class="fa-solid fa-chevron-right"></i>
       </button>
        </div>
        </div>
     <h1>products</h1>
     {
     response.data.map(product=><Productitem product={product}/>)}
    </Link>
   </div>
   
    }
export default ProductsList;