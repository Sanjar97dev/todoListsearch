import React, { Component } from 'react'

export default class TodoHeader extends Component {
  render() {
    const dom=this.props.all
    const don=this.props.done
    return (
        <div className='d-flex justify-content-between'>
        <h3>Todo List</h3>
        <h4>{dom} more todo {don} done</h4>
        </div>
    )
  }
}
