import React from "react";
import { Link,  } from "react-router-dom";
const Header=()=>{
    // const navigate=useNavigate()
     return <nav class="navbar navbar-expand-lg bg-light">
       <div className="container">
    <Link to="/" className="navbar-brand">FSA</Link>
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li className="nav-item"><Link  className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Ref">ref</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/Weather">Weather</Link></li>
        {/* <li className="nav-item"><Link className="nav-link"to="/food">food</Link></li> */}
        <li className="nav-item"><Link className="nav-link"to="/Reducer">Reducer</Link></li>       
    </ul>
    </div>
    </nav>
}
export default Header;