import React from "react" 
import Header from "./Headers"
import Footer from "./Footer"
import { BrowserRouter ,Route,Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Weather from "./Weather"
import Image from "./Image"
import Ref from "./Refhook"
import Counterone from "./Reducerhook"
class App extends React.Component{
    render(){
        return<div>
             <BrowserRouter>
           <Header/>
           <Routes>                  
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="Weather" element={<Weather/>}/>
            <Route path="Image" element={<Image/>}/>
            <Route path="ref" element={<Ref/>}/>
            <Route path="Reducer" element={<Counterone/>}/>
           </Routes>
           <Footer/>
        </BrowserRouter> 
        </div>
    }
}
export default App
