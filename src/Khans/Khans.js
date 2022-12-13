import React from "react";
const Three=()=>{
    const data=[
        {id:1,Name:'sharukh khan',firstmovie:"deewaana",image:"https://images.news18.com/ibnlive/uploads/2022/05/shah-rukh-khan-1-1.jpg"},
        {id:2,Name:"Salmankhan",firstmovie:"biwihotoaisi",image:"https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg"},
        {id:3,Name:"Aamirkhan",firstmovie:"dil",image:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Aamir_Khan_From_The_NDTV_Greenathon_at_Yash_Raj_Studios_%2811%29.jpg"}
    ]
    return<div>
        <h1>Three khans of bollywood</h1>
        {data.map(Three=><div>
            <h3>{Three.Name}</h3>
            <h3>{Three.firstmovie}</h3>
            <img Src={Three.image} width="400" height="400"/>
            </div>)}
    </div>
}
export default Three;