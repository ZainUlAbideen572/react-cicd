import {useEffect,useState } from "react"

const UseCounter=()=>{
    const[count,setcount]=useState(0);
   
    
    useEffect(()=>{
        setInterval(()=>{
        setcount(count=>count+1)
        },1000)
    },[])
    return count
    

}
export default UseCounter;