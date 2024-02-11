import React, { Component } from 'react'

export default class TodoAdd extends Component {
    state={
        text:''
    }
    setText=(e)=>{
        this.setState({text:e.target.value.trim()})
    } 

    handleAddTodo = () => {
        const trimText=this.state.text;

        if (trimText) {
            this.props.onAddtodo(trimText)
            this.setState({text: ''})
        }
    }  

    
  render() {

    return (
        <div className="d-flex">
        <input type="text" placeholder='add todo' 
        className="form-control"
        value={this.state.text}
        onChange={this.setText}
        />
        <button className="btn btn-info" onClick={this.handleAddTodo}>Add</button>
    </div>
    )
  }
}
