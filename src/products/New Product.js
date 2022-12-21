import axios from "axios";
import React from "react";
class NewProduct extends React.Component {
  state = {
    brand: "",
    model: "",
    instock: false,
    price: 0,
    Success:false,
    haserror:false
    
  };
  oncontrolchange=(evt)=>{
    this.setState({[evt.target.name]:evt.target.value})
  }
  // when the values are changing just update the state
  onsave=async()=>{
    try{
      await  axios.post('https://fsa-api-b4.onrender.com/api/products',this.state)
      this.setState({Success:true,
        brand:"",
        price:"",
        model:"",
        discount:"",
        haserror:false})

    }
     catch(e){
      this.setState({Success:false,haserror:true})
     }
  }
  // push the data once it is submitted

 
  render() {
    const{brand,model,price,discount}=this.state
    return <div className="container m-3">
      <h4>Add new Product</h4>
      <form>
        {this.state.Success?<div className="alert alert-success">
     successfully operation completed
        </div>:null}
        {this.state.haserror?<div className="alert alert-danger">
     something went wrong
        </div>:null}
        
        <div class="mb-3">
         
          <label for="brand" class="form-label">Brand</label>
          <input value={brand} name="brand"type="text" class="form-control" id="brand" placeholder="brand"  onChange={this.oncontrolchange}/>
          {!brand?<span>
           <span className="text-danger">Brand requiredd</span>
          </span>:null}
        </div>
        <div class="mb-3">
          <label for="model" class="form-label">model</label>
          <input value={model}name="model"type="text" class="form-control" id="model" placeholder="model" onChange={this.oncontrolchange}/>
          {!model?<span>
           <span className="text-danger">model requiredd</span>
          </span>:null}
        </div>
        <div class="mb-3 ">
          <label for="price" class="form-label">Price</label>
          <input value={price}name="price"type="text" class="form-control" id="Price" placeholder="price" onChange={this.oncontrolchange} />
          {!price?<span>
           <span className="text-danger">price requiredd</span>
          </span>:null}
        </div>
        <div class="mb-3">
          <label for="instock" class="form-label">instock</label>
          <input  name="instock" type="Checkbox" class="form-check-input" id="instock"  onChange={this.oncontrolchange}/>
          </div>
     <div class="mb-3">
          <label for="discount" class="form-label">discount</label>
          <input value={discount} name="discount" type="text" class="form-control" id="discount" placeholder="discount" onChange={this.oncontrolchange}/>
          {!discount?<span>
           <span className="text-danger">discount requiredd</span>
          </span>:null}
        </div>

      </form>
      <button  disabled={!brand||!price||!model}className="btn btn-success" onClick={this.onsave}>save
      <i className="fa fa-save"></i>
      </button>
    </div>
  }
}
export default NewProduct;