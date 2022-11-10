import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props){
    super(props)
    this.state={
     message:"Hello eventbind"
    }
  }
  clickHandler(){
    this.setState({
        message:"hello bys bye"
    })
    console.log("cHanlder"+this)
  }
    render() {
    return (
      <>EventBind
      <h1>{this.state.message}</h1>
      {/* <button onClick={this.clickHandler.bind(this)} >EventBind</button> */}
      <button onClick={()=>this.clickHandler()} >EventBind</button>
      </>
    )
  }
}

export default EventBind