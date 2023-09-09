import React, { useState } from "react";
import logo from './Weather logo.png'
function Weather(){
    const[city,setcity]=useState('')
    const[result,setresult]=useState('')
    const oninputchange=(evt)=>{
        setcity(evt.target.value)
    }
    const submit=(evt)=>{
        evt.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(res=>res.json())
        .then(data=>{
            const kelvin=data.main.temp
            const celsius=kelvin-273.15
            setresult(Math.round(celsius)+"°C")
            setcity('')
        })
        // console.log(city)
    }

    return<div>
        <form onSubmit={submit}>
            <div style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0i8Si67UuZdhDLBb2hLCxIH9HBf9PjESjg&usqp=CAU")`}}className="card">
                <div className="card-body">
                    <div className="card-title">
                      <h2>Weather</h2>
                      {/* <img src={logo} height="500" widht="500"/> */}
                    </div>
                    </div>
            </div>
        <label className="form-label" for="Weather"></label>
    <input onChange={oninputchange} type="text" name="Weather"value={city} className="form-control" id="Weather" />
    </form>
    <button onClick={submit} className="btn btn-success">Get temperature</button>
    <h1>{result}</h1>
    </div>
    
}
export default Weather;