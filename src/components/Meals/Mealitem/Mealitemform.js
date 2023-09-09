import classes from './Melaitemform.module.css'
import Input from './../../Ui/Input'
const Mealitemform=props=>{
  return<form  className={classes.form}>
     <Input ClassName={classes.input} label="amount" input={{
        id:'amount',
        type:'amount',
        min:'1',
        max:'5',default:'1'
     }}/>
   <button>+add</button>
  </form>
}
export default Mealitemform;