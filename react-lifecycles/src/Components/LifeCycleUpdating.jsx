import React, { Component } from 'react'
import LifeCycleUnMounting from './LifeCycleUnMounting'

export default class LifeCycleUpdating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         condition:true
      }
      console.log("I am Constructor From --- LifeCycle Update Component")
    }
    static getDerivedStateFromProps(props, state){
        console.log("I am from getDerivedStateFromProps from --- LifeCycle Update Component")
         return state
        // here we have an able to change the initial state through props from another component
        // it should return something is must and static is must
    }
    
  render() {
    console.log("I am from render from  --- LifeCycle Update Component")
    return (
      <div>
        <h1>I am Lifecycle Updating Phase</h1>
        
        <p>{this.props.data}</p>
        <button onClick={() => {this.setState(prev => ({condition: !prev.condition}))}}>I am used to unMount the component</button>
        <hr/>
        {this.state.condition && <LifeCycleUnMounting/>}
        
      </div>
    )
  }
  componentDidMount(){
    console.log("I am from componentDidMount from --- LifeCycle Update Component")
    console.log("When the components are nested firsty componentDidMount of child is triggered and then componentDidMount of parent triggered")
  }

  getSnapshotBeforeUpdate(previousProps, previousState){
    console.log("Previous props : ", previousProps)
    console.log("PreviousState: " , previousState)
    // it is simple repesention of virtual dom
    console.log("I am getSnapshotBeforeUpdate --- I will be call first in updating phase ")
    //I will used to cross check with previous props and state
    return null
  }

  shouldComponentUpdate(){
    console.log("I am from shouldComponentUpdate --- I will be call second in updating phase")
    //here we are able to control the updating whether we want to update or not

    // by default it return true (means upadte)
    //false means we stop the update
    return true
  }


   //   Render will be called --- 3rd in updating

   componentDidUpdate(){
    console.log(" I am from  componentDidUpdate to check the component updated or not -- I will call 4th in updating")
   }
}
