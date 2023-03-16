import React, { Component } from 'react'
import LifeCycleUpdating from './LifeCycleUpdating'

export default class LifeCycleMounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        msg : "I am from Mounting Phase"
      }
      console.log("I am from constructor method -- I will call first in Mounting Phase")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("I am from getDerivedStateFromProps -- I will be call second in Mounting Phase")
        //state.msg = props.msg1 // replace this to show the difference
        return state
        // here we have an able to change the initial state through props from another component
        // it should return something is must and static is must
    }
    
  render() {
    console.log("I am from render -- I will call third in Mounting Phase")
    return (
      <div>

        <h1>I am Lifecycle Mounting Phase</h1>
        <button onClick = {() => {this.setState({msg: "It is Updated from mounting component"})}}>Upadting Component</button>
        <hr/>
        <LifeCycleUpdating data = {this.state.msg}/>

        
        {/* {this.state.msg} */}
      </div>
    )
  }

  componentDidMount(){
    console.log("I am from componentDidMount -- I will call Fourth in Mounting Phase")
  }
}
