import React, { useState } from 'react'

function ControlUncontrol() {
 const [name,setname]=useState();
 const [fullName,setFullName]=useState();
     const inputEvent=(event)=>{
       console.log(event.target.value)
       console.log("clicked")
       setname(event.target.value)
     }
     const onSubmit = ()=>{
        setFullName(name);
     }
    return (
    <>
        <h1>Hello{fullName}</h1>
        <div><input type="text"
            placeholder='enter name' onChange={inputEvent}
        /></div>
        <button onClick={onSubmit}>Click</button>
    </>
  )
}

export default ControlUncontrol