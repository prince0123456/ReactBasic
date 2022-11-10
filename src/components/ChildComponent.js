import React from 'react'

function ChildComponent(props) {
  return (
    <div>ChildComponent
    <button onClick={()=>props.greetHandler('chil0d')}>greetParent</button>
    </div>
  )
}

export default ChildComponent