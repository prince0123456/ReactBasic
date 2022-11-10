import React from 'react'
import './myStyle.css'
const StyleSheet = (props) => {
    let className=props.primary ? 'primary' :''
  return (
    <>
        <h1 className={`${className} font-xl`}>
               CSS
        </h1>
    </>
  )
}

export default StyleSheet