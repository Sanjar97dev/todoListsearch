import React, { Component } from 'react'

export default class TodoHeader extends Component {
  render() {
    const dom=this.props.all
    const don=this.props.done
    return (
        <div className='d-flex justify-content-between'>
        <h3>Тапшырма Баракчасы</h3>
        <h4>{dom} көбүрөөк иш {don} аткарылды</h4>
        </div>
    )
  }
}
