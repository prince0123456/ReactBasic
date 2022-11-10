import React, { Component } from 'react'

export class RefDemo extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef=React.createRef()
  }
  componentDidMount(){
   console.log(this.inputRef)
  }
  clickHandler=()=>{
    console.log(this.inputRef.current.value)
  }
    render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefDemo