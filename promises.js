let p=new Promise((resolve,reject)=>{
  let a=2
  if(a==2){
    resolve('succes')
  }
  else{
    reject('failed')
  }
})
p.then(res=>{
    console.log(res)
})