import React from "react" 
import ProductsList from "./products/ProductsList"
import Users from "./Users/Users"
import Cities from "./Cities/Cities"
import Events from "./Events"
import NewProduct from "./products/New Product"
import  Newcredential  from "./Newcredential"
import Counter from "./Counter"
class App extends React.Component{
    render(){
        return<div>
             {/* <ProductsList/>  */}
             {/* <Counter/> */}
          {/* <Users/> */}
             {/* <Newcredential/> */}
             <NewProduct/>  
         
            {/* <Cities/> */}
        {/* <Events count={0}/>  */}
        {/* <Product/> */}
           {/* <Events count={20}/> */}
    
    
 
        </div>
    }
}
export default App
