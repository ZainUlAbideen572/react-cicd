import axios from "axios";
import React from "react";
class NewProduct extends React.Component {
  state = {
    brand: "",
    model: "",
    instock: false,
    price: 0,
    
  };
  oncontrolchange=(evt)=>{
    this.setState({[evt.target.name]:evt.target.value})
  }
  // when the values are changing just update the state
  onsave=async()=>{
   await  axios.post('https://fsa-api-b4.onrender.com/api/products',this.state)
    console.log('success')
  }
  // push the data once it is submitted

 
  render() {
    return <div className="container m-3">
      <h4>Add new Product</h4>
      <form>
        <div class="mb-3">
          <label for="brand" class="form-label">Brand</label>
          <input name="brand"type="text" class="form-control" id="brand" placeholder="brand"  onchange={this.oncontrolchange} />
        </div>
        <div class="mb-3">
          <label for="model" class="form-label">model</label>
          <input name="model"type="text" class="form-control" id="model" placeholder="model" onchange={this.oncontrolchange}/>
        </div>
        <div class="mb-3 ">
          <label for="price" class="form-label">Price</label>
          <input name="price"type="text" class="form-control" id="Price" placeholder="price" onchange={this.oncontrolchange} />
        </div>
        <div class="mb-3">
          <label for="instock" class="form-label">instock</label>
          <input  name="instock" type="Checkbox" class="form-check-input" id="instock"  onchange={this.oncontrolchange}/>
        </div>
     
      
        <div class="mb-3">
          <label for="discount" class="form-label">discount</label>
          <input name="discount" type="text" class="form-control" id="discount" placeholder="discount"onchange={this.oncontrolchange}/>
        </div>

      </form>
      <button  className="btn btn-success" onClick={this.onsave}>save
      <i className="fa fa-save"></i>
      </button>
    </div>
  }
}
export default NewProduct;