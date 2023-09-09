import React from "react";
const Gallery=({data})=>{
    return<div>
        {/* <h2>Gallery</h2> */}
        {data.map(image=><div>
            <div className="row">
            <div className="card">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt='product' width="250" height="250"/>
          {image.id} 
          <br/>
          {image.title}
          </div>
          </div>
            </div>
            )}
    </div>
}
export default Gallery;