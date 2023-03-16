// here I am creating normal com
import React, { Component } from 'react'

export default class LifeCycleUnMounting extends Component {
  render() {
    return (
      <div>
        <h1>I am unmounting</h1>
      </div>
    )
  }

  componentWillUnmount(){
    console.log("I am from componentWillUnmount -- only the stage in unmounting")
  }
}
