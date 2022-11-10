import React, { Component } from 'react'

 class CLassCounter extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      count:0
   }
 }
 add=()=>{
    this.setState({
        count:this.state.count+1
    })
 }
    render() {
    return (
      <div>{this.state.count}
      <button onClick={this.add}>bbb</button>
      </div>
    )
  }
}

export default CLassCounter