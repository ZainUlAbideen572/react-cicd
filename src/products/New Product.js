
import React, { useState,useeffect } from "react";
import axios from "axios";
function NewProduct(){
  const[form,setform]=useState({
       brand: "",
      model: "",
      instock: false,
      price: 0,
      Success:false,
      haserror:false
    })
    
  
  const oncontrolchange=(evt)=>{
    setform({[evt.target.name]:evt.target.value})
  }
  // when the values are changing just update the state
  //  const onsave=useeffect(async()=>{
  //       try{
  //      await axios.post('https://fsa-api-b4.onrender.com/api/products',form)
  //      setform({Success:true,
  //        brand:"",
  //        price:"",
  //        model:"",
  //        discount:"",
  //        haserror:false})
 
  //    }
  //     catch(e){
  //      setform({Success:false,haserror:true})
  //     }
  //  },[])
   
  // push the data once it is submitted

 
  
   
    return <div className="container m-3">
      <h4>Add new Product</h4>
      <form>
        {/* {Success?<div className="alert alert-success">
     successfully operation completed
        </div>:null} */}
        {/* {haserror?<div className="alert alert-danger">
     something went wrong
        </div>:null} */}
        
        <div class="mb-3">
         
          <label for="brand" class="form-label">Brand</label>
          <input value={form.brand} name="brand"type="text" class="form-control" id="brand" placeholder="brand"  onChange={oncontrolchange}/>
          {!form.brand?<span>
           <span className="text-danger">Brand requiredd</span>
          </span>:null}
        </div>
        <div class="mb-3">
          <label for="model" class="form-label">model</label>
          <input value={form.model}name="model"type="text" class="form-control" id="model" placeholder="model" onChange={oncontrolchange}/>
          {!form.model?<span>
           <span className="text-danger">model requiredd</span>
          </span>:null}
        </div>
        <div class="mb-3 ">
          <label for="price" class="form-label">Price</label>
          <input value={form.price}name="price"type="text" class="form-control" id="Price" placeholder="price" onChange={oncontrolchange} />
          {!form.price?<span>
           <span className="text-danger">price requiredd</span>
          </span>:null}
        </div>
        <div class="mb-3">
          <label for="instock" class="form-label">instock</label>
          <input  name="instock" type="Checkbox" class="form-check-input" id="instock"  onChange={oncontrolchange}/>
          </div>
     <div class="mb-3">
          <label for="discount" class="form-label">discount</label>
          <input value={form.discount} name="discount" type="text" class="form-control" id="discount" placeholder="discount" onChange={oncontrolchange}/>
          {!form.discount?<span>
           <span className="text-danger">discount requiredd</span>
          </span>:null}
        </div>

      </form>
      <button className="btn btn-success">save
      <i className="fa fa-save"></i>
      </button>
    </div>
  }

export default NewProduct;