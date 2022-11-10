import React, { Component } from 'react'

 class FunctionClick extends Component {
 clickEvt() {
    console.log("Button click");
  }
    render() {
    return (
      <>FunctionClick
      <button onClick={this.clickEvt}>Click</button></>
    )
  }
}

export default FunctionClick