import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {
  render() {
    let clazz=''
    if(this.props.imp){
       clazz+=' imp'  
    };

    let doneclass=''
    if(this.props.done){
      doneclass+=' done'
    };
    return (
      <>
       <span className="d-flex justify-content-between">
          {this.props.editing ? (
            <input
              type="text"
              value={this.props.editedText}
              onChange={this.props.onInputChange}
            />
          ) : (
            <span
              className={`flex-grow-1 ${clazz} ${doneclass}`}
              onClick={() => this.props.onDoneTodo(this.props.id)}
            >
              {this.props.title}
            </span>
          )}
          <button
            className="btn btn-primary"
            onClick={() => this.props.editing ? this.props.onSaveEdit(this.props.id) : this.props.onEditTodo(this.props.id)}
          >
            {this.props.editing ? 'Save' : <i className="bi bi-pencil"></i>}
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => this.props.onDelTodo(this.props.id)}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={() => this.props.onImpTodo(this.props.id)}
          >
            <i className="bi bi-exclamation-circle-fill"></i>
          </button>
        </span>
      </>
    )
  }
}
