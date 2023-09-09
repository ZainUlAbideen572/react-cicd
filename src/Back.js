import React,{useRef} from "react";
function Back(){
    const age=useRef()
    const submit=(evt)=>{
        evt.preventDefault();
        console.log(age.current.value)
    } 
    return <React.Fragment>
        <form onSubmit={submit}>
                <input type="text" name="Search"  ref={age}/><br/>
                <br/><input type="submit"/>
            </form>
    </React.Fragment>
}
export default Back;