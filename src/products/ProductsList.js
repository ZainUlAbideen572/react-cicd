import React from "react";
import Productitem from "./Productitem";

const ProductsList=()=>{
    console.log("Test")
    const data=[
    {id:1,name:"iphone",brand:"apple",image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712888128",inStock:true,price:1200},
    {id:2,name:"iphone",brand:"apple",image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712888128',inStock:false,price:1500}
]
    return<div>
     <h1>products</h1>
        {data.map(product=> <Productitem product={product}  />)}
   </div>
}
export default ProductsList;