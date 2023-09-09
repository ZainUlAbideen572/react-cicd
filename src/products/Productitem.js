import React from "react";
import './product.css'
const  Productitem=({product})=>{
    return <div className="col-md-4 off-md-1">
        <div className="card">
        <img src={product.image} alt='product' className="card-img-top" width="400" height="400"/>
        <div className="Card-body">
        <div className="card-title">
            {product.brand} {product.price}
          </div>
        </div>
    </div>
    <div className="card-footer">
        <button className="custom-btn btn btn-info btn-lg">Add to cart 
        <i class="bi bi-cart-dash"></i>
        </button>
    </div>
    </div>
        }    
        export default Productitem;