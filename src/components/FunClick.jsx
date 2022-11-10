import React from 'react'

function FunClick() {
    function funClick(){
        console.log("Hello")
    }
  return (
    <>FunClick
    <button onClick={funClick}>Click Fun</button>
    </>
  )
}

export default FunClick