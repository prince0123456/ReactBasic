import React, { useState } from 'react'

export const Lists = () => {
const [count,setcount]=useState(1);
let arr=[];
for(let i=1;i<100;i++){
    arr.push(i);
}
  return (
    <div>
        {arr.map((e)=>{
            return <ul><li>{e}</li></ul>
        })}

    </div>
  )
}
