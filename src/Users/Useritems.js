import React from "react";
const Useritem=({Users})=>{
   return <div>
            <h3>{Users.login}</h3>
            <h3>{Users.site_admin}</h3>
            <img className="rounded-circle"src={Users.avatar_url} width="100"  height="100"/>
            </div>
            }
export default Useritem;
