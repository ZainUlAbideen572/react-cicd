import React,{Fragment} from "react"; 
import pic from "../../assests/pic.jpg"
import classes from './Headers.module.css'
import Headerscartbutton from "./Headersscartbutton";
import Mealsss from "../Meals/Meals";
import Register from '../Cart/Register'
import Card from '../Cart/Card'
function Meals(){
    return <Fragment>
        <header className={classes.header}>
            <h1>Lets start </h1>
            <Headerscartbutton/>
            <Card/>
        </header>
        <main>
            <Mealsss/>
        </main>
        {/* <main>
            <Register/>
        </main> */}
        <div>
          <img src={pic} width="800" height="400" alt="foody"/>
        </div>
    </Fragment>
}
export default Meals;