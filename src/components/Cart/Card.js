import classes from './Card.module.css'
import Modal from './Modal'
const Card=props=>{
    const carditems=[{id:1,name:'rahul',amount:'2',price:19.69}].map(item=><li>{item.name}</li>)
    return<Modal>
    {carditems}
    <div className={classes.total}>
        <span>Total amount</span>
        <span>35.63</span>
    </div>
    <div className={classes.actions}>
    <button className={classes['button-alt']}>order</button>
    <button className={classes.button}>close</button>
    </div>
    </Modal>
} 
export default Card;