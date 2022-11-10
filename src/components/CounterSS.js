import React, { useState } from 'react'

function CounterSS() {
const [count,setCount]=useState(0);
function add(){
    setCount(count+1);
}
function min(){
    setCount(count-1);
}
function mul(){
    if(count==5){
        setCount(count*5);
    }
}
function reset(){
    setCount(0);
}
let save;
  return (
    <>CounterSS
       <h1>Counter=={count}</h1>
       <button onClick={()=>add()}>++++</button>
       <button onClick={()=>min()}>----</button>
       <button onClick={()=>reset()}>#####</button>
       <h1>{}</h1>
    </>
  )
}

export default CounterSS