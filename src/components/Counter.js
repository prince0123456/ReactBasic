import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count);
    }
    decrement(){
        
        this.setState({
            count:this.state.count-1
        })
       console.log(this.state.count);
    }
  render() {
    return (
      <>
      <h1>Count ---{this.state.count}</h1>
      <button onClick={()=>this.increment()}>Increasing</button>
      <button onClick={()=>this.decrement()}>Decreasing</button>
      </>
    )
  }
}

export default Counter