import React, { useState } from 'react'

const Form = () => {
  const [name,setName]=useState({
    fname:'',
    lname:''
  })
 function change(e) {
   const value=(e.target.value)
   const name=(e.target.name) 
   setName((prev)=>{
    console.log(prev)
    if(name==='fname'){
      return{
        fname:value,
        lname:prev.lname,
      }
    }
   });
 }
 const onSubmits=(e)=>{
  e.preventDefault();
 }
  return (
    <>
        <h1>{name.fname}</h1>
       <h1>{name.lname}</h1>
            <form onSubmit={onSubmits}>
            <label>Username</label>
            <input type='Text'name='fname' onChange={()=>change}/>
            <label>Last name</label>
            <input type='Text'name='lname' onChange={()=>change}/>
            <button >Submit</button>
</form>
    </>
  )
}

export default Form