import React from "react";
class NewProduct extends React.Component(){
 state={
    brand:"",
    model:"",
    instock:false,
    price:0,
    discount:0
 };
 render(){
     return <div className="container m-3">
    <h4>Add new Product</h4>
        <form>
        <div class="mb-3">
  <label for="brand" class="form-label">Brand</label>
  <input type="text" class="form-control" id="brand" placeholder="brand"/>
</div>
<div>
<label for="price" class="form-label">Price</label>
  <input type="text" class="form-control" id="Price" placeholder="price"/>
</div>
<div>
<label for="instock" class="form-label">instock</label>
  <input type="checkbox" class="form-control" id="instock"/>
</div>
<div>
    <label for="price" class="form-label">price</label>
    <input type="text" class="form-control" id="price"/>
</div>
<div>
<label for="discount" class="form-label">discount</label>
    <input type="number" class="form-control" id="discount"/>
</div>
      </form>
    </div>
 }
}
export default NewProduct;