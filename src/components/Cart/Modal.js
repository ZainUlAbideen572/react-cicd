import React, { Fragment } from "react";
import  ReactDOM  from "react-dom";
import  classes from './Modal.module.css'
const Backdrop=props=>{
     return<div className={classes.backdrop}>
        
     </div>
}
const Modeloverlay=props=>{
    return<div className={classes.modal}>
        <div className={classes.actions}>{props.children}</div>

    </div>
}
const element=document.getElementById('overlay')
const Modal=()=>{
    return<Fragment>
        {ReactDOM.createPortal(<Backdrop/>,element)}
        {ReactDOM.createPortal(<Modeloverlay/>,element)}
    </Fragment>
}
export default Modal;