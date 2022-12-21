import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
   return <nav class="navbar navbar-expand-lg bg-light">
       <div className="container">
    <a class="navbar-brand" href="#">FSA</a>
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link  className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link  className="nav-link" to="/">Home</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/Product">Product</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Users">Users</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/Khans">khans</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/Events">Events</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/city">cities</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/ProductsList">Productlist</Link></li>  
    </ul>
    </div>
    </nav>
}
export default Header;