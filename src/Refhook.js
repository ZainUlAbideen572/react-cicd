import React,{useRef,useEffect} from "react";
function Ref(){
    const data=useRef('zayan')
    const count=useRef(0)
    const submithandler=(evt)=>{
        evt.preventDefault()
        console.log(data.current.value)
    }
   useEffect(()=>{
     count.current=count.current+1
   }) 

    return <div>
        <form onSubmit={submithandler}>
        <input ref={data}type="text" placeholder="enter the name"/>
        <input type="submit"/>
        {/* <button onClick={()=>{count.:{count.current}}}/> */}
        </form>
        <h1>Render count:{count.current} </h1>
    </div>
}
export default Ref;
