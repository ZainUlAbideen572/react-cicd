import React, { useEffect, useState } from "react";
import axios from "../Utils/Axios";
import Productitem from "./Productitem";
import { Link,  useNavigate } from "react-router-dom";


const ProductsList=({Product})=>{
   
    const[response,setresponse]=useState({
        metadata:{},
        data:[]
    })
    const [haserror,sethaserror]=useState(false)
    const[page,setpage]=useState(1)
    const[limit,setlimit]=useState(10)
    const navigate=useNavigate()
          useEffect(()=>{
            const userinfo=localStorage.getItem('user')
            const headers={}
            if(userinfo){
                const token=JSON.parse(userinfo).token
                headers.authorization=`Bearer ${token}`
            }
            const url=`/api/products/page/${page}/${limit}/10`
            axios.get( url,{headers})
            .then(res=>setresponse(res.data),
            sethaserror(false))
            .catch(err=>{
                if(err.response&&err.response.status===401){
                    navigate('/Loginform')
                } 
               sethaserror(true)})
},[page],[limit])
    
    const  onNext=()=>{
        if(page<response.metadata.pages){
            
            setpage(page+1)
        }
    }
   const onprev=()=>{
    if(page>1){

        setpage(page-1)
    }
   }
   console.log(response.metadata.count)
   return<div>

        <Link>
        <div className="row">
            <div className="col-2">
        <Link  to="/Products/new"className="btn btn-success">
            Add new product
            </Link>
        </div>
        <div className="col-1">
         <button onClick={onprev} className="btn btn-outline-secondary">
         <i class="fa-solid fa-chevron-left"></i>
         </button>
        </div>
       <div className="col-1">
          <b>page {page} of {response.metadata.pages}</b>
       </div>
       <div className="col-1">
        <select className="form-select">
            <option>10</option>
            <option>20</option>
            <option>30</option>
        </select>

       </div>
        <div className="col-1">
       <button onClick={onNext}className="btn btn-outline-secondary">
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