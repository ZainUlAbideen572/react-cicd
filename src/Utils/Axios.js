import axios from "axios"
let token=''
const userinfostring=localStorage.getItem('user')
if(userinfostring){
    const user=JSON.parse(userinfostring).token
    token=user.token
}
const instance=axios.create({
    baseURL:'https://fsa-api-b4.onrender.com',
    headers:{'authorization':`Bearer ${token}`}
})
export default instance;