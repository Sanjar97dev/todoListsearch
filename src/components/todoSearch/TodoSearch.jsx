import React, { Component } from 'react'

export default class TodoSearch extends Component {
  btns=[
    {name: 'баары', title: 'Баары'},
    {name: 'активдүү', title: 'Активдүү'},
    {name: 'аткарылды', title: 'Аткарылды'},
  ]
  render() {


    const buttons=this.btns.map(el=>{
      const active=this.props.filter===el.name
      const clazz=active ? 'btn-info' : 'btn-outline-secondary'
      return (
        
        <button key={el.title} className={`btn ${clazz}`} onClick={()=>this.props.onSetFilter(el.name)}>{el.title}</button>
      )
    })

    return (
        <div className='d-flex'>
        <input type="text" placeholder='тапшырма издөө' className='form-control'  value={this.props.searchTodo} 
        onChange={this.props.searchInput}/>
        {/* <button className='btn btn-info' onClick={this.props.handleAddTodo}>All</button>
        <button className='btn btn-outline-secondary'>Active</button>
        <button className='btn btn-outline-secondary'>Done</button> */}
        {buttons}
      </div>
    )
  }
}
