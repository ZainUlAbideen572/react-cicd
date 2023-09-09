import CartIcon from "../Cart/carticon";
import classes from './Headerscartbutton.css'
const Headerscartbutton=props=>{
  return <div>
    <span>
     <CartIcon/>
    </span>
    <span >Your cart</span>
    <span className={classes.badge}>3</span>
  </div>
}
export default Headerscartbutton