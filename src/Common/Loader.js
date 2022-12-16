import React from "react";
const Loader=()=>{
      return <div className="loader" style={{position:"absolute",width:"40%",height:"50%"}}>
    <div className="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
  </div>
}
export default Loader;