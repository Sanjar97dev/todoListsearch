import React, { Component } from 'react';

export default class TodoAdd extends Component {
  handleAddTodo = () => {
    const trimText = this.props.editedText.trim();

    if (trimText) {
      if (this.props.editingTodoId) {
        this.props.onSaveEdit(this.props.editingTodoId);
      } else {
        this.props.onAddtodo(trimText);
      }
      this.props.onInputChange({ target: { value: '' } });
    }
  };

  render() {
    return (
      <div className="d-flex">
        <input
          type="text"
          placeholder="тапшырма кошуу"
          className="form-control"
          value={this.props.editedText}
          onChange={this.props.onInputChange}
        />
        <button className="btn btn-info" onClick={this.handleAddTodo}>
          {this.props.editingTodoId ? 'Сактоо' : 'Кошуу'}
        </button>
      </div>
    );
  }
}
