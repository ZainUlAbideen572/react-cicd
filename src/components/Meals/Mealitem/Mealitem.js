import React from "react";
import classes from './Mealitem.module.css'
import Mealitemform from "./Mealitemform";
const Mealitem=(props)=>{
    const price=`$${props.price.toFixed(2)}`
    return<div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    <div>
       <Mealitemform/> 
    </div>

    </div>
}
export default Mealitem;