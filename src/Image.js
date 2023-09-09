import React, { useState } from "react";
import axios from "axios";

import Gallery from "./Gallery";
const Image=()=>{
    const[Search,setSearch]=useState('')
    const[data,setdata]=useState([]);
    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127" 
    const oninputchange=(evt)=>{
        setSearch(evt.target.value)
    }
    const submit=(evt)=>{
        evt.preventDefault();
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${Search}&per_page=24&format=json&nojsoncallback=1`)
        .then(res=>setdata(res.data.photos.photo))
        
    }
    return<div>
        <center>
        <h2>Gallery snapshot</h2>
            <form onSubmit={submit}>
                <input type="text" name="Search" value={Search} onChange={oninputchange}/><br/>
                <br/><input type="submit"/>
            </form>
            <br/>
            {data.length>=1?<Gallery data={data}/>:<h2>data not loaded</h2>}
        </center>
    </div>
}
export default Image;