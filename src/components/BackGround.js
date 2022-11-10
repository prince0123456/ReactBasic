import React, { useState } from 'react'
import './Styles.css'


function BackGround() {
const [color,setcolor]= useState('#ffffff');
const randomColorHex=()=>{
  const randomColor="#"+Math.floor(Math.random()*16777215).toString(16);
  setcolor(randomColor);
}

  return (
  
    <div id='div1' style={{backgroundColor: `${color}`}}>
    {setInterval(randomColorHex,2000)}
    </div>
  )
}

export default BackGround