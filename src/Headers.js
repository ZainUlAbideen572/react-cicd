import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
   return <nav class="navbar navbar-expand-lg bg-light">
       <div className="container">
    <Link to="/" className="navbar-brand">FSA</Link>
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
        <li className="nav-item"><Link className="nav-link"to="/Products/ProductsList">ProductList</Link></li>
        <div className="btn btn-warning m-3">signup</div>
        <Link className="btn btn-success m-3" to="/Loginform">Login</Link> 
        <div className="btn btn-danger m-3">Logout</div>    
    </ul>
    </div>
    </nav>
}
export default Header;