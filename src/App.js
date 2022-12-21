import React from "react" 

import Header from "./Headers"
import Footer from "./Footer"
import { BrowserRouter ,Route,Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Product from "./Product"
import Users from "./Users/Users"
import Khans from './Khans/Khans'
import ProductsList from "./products/ProductsList"
import Events from "./Events"
import Cities from "./Cities/Cities"
class App extends React.Component{
    render(){
        return<div>
         <BrowserRouter>
           <Header/>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Users" element={<Users/>}/>
            <Route path="/khans" element={<Khans/>}/>
            <Route path="/ProductsList" element={<ProductsList/>}/>
            <Route path="/Events" element={<Events/>}/>
            <Route path="/city" element={<Cities/>}/>
           </Routes>
           <Footer/>
        </BrowserRouter>
    
    
 
        </div>
    }
}
export default App
