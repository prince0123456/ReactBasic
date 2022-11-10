import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
           message:"Welcome visitor",
        }
    }
    chabgeMessage(){
        this.setState({
            message:"thank you for subscribing"
        })
    }
    changeMessage(){
      this.setState({
          message:"bys bys "
      })
  }
  render() {
    return (
      <>

        <h1>Welcome message {this.state.message}</h1>
        <button onClick={()=>this.chabgeMessage()}>Subsribe</button>
        <button onClick={()=>this.changeMessage()}>Subsribe</button>
      </>
    )
  }
}

export default Message