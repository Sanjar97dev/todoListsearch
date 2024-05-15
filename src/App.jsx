import React, { Component } from 'react'
import TodoHeader from './components/todoHeader/TodoHeader'
import TodoList from './components/todoList/TodoList'
import TodoSearch from './components/todoSearch/TodoSearch'
import TodoAdd from './components/todoAdd/TodoAdd'
import '../src/App.css'
// import { preview } from 'vite'

export default class App extends Component {
  state = {
    todoData: [
      { id: 1, title: 'React үйрөнүү', important: false, done: false },
      { id: 2, title: 'JS үйрөнүү', important: false, done: false },
      { id: 3, title: 'Redux үйрөнүү', important: false, done: false },
    ],
    filter: 'баары', //active, done
    searchTodo: '',
    editedText: '',
    editingTodoId: null

  }

  onSetFilter = (status) => {
    this.setState({ filter: status })
  }

  filter = (array, status) => {
    switch (status) {
      case 'баары':
        return array
      case 'активдүү':
        return array.filter(el => !el.done)
      case 'аткарылды':
        return array.filter(el => el.done)
      default:
        return array
    }
  }

  delTodo = (id) => {
    const delFilter = this.state.todoData.filter(el => el.id !== id)
    this.setState({ todoData: delFilter })
  }

  addNewTodo = (text) => {
    const ids = this.state.todoData.map(el => el.id)
    const newTodo = {
      title: text,
      important: false,
      done: false,
      id: ids.length > 0 ? Math.max(...ids) + 1 : 1,
    }
    this.setState({ todoData: [...this.state.todoData, newTodo] })
  }

  impTodo = (id) => {
    const index = this.state.todoData.findIndex(el => el.id === id)
    const todo = this.state.todoData[index]
    const updTodo = { ...todo, important: !todo.important }
    const before = this.state.todoData.slice(0, index)
    const after = this.state.todoData.slice(index + 1)
    this.setState({ todoData: [...before, updTodo, ...after] })
  }

  doneTodo = (id) => {
    const index = this.state.todoData.findIndex(el => el.id === id)
    const todo = this.state.todoData[index]
    const updTodo = { ...todo, done: !todo.done }
    const before = this.state.todoData.slice(0, index)
    const after = this.state.todoData.slice(index + 1)
    this.setState({ todoData: [...before, updTodo, ...after] })
  }

  searchInput = (e) => {
    this.setState({ searchTodo: e.target.value.trim() });
  };

  editToggle = (id) => {
    this.setState((prevState) => ({
      editingTodoId: prevState.editingTodoId === id ? null : id
    }))
  }

  todoInputChange = (e) => {
    this.setState({ editedText: e.target.value.trim() })
  }


  todoSaveEdit = (id) => {
    const index = this.state.todoData.findIndex((el) => el.id === id);
    const todo = this.state.todoData[index];
    const updatedTodo = { ...todo, title: this.state.editedText };
    const before = this.state.todoData.slice(0, index);
    const after = this.state.todoData.slice(index + 1);
    this.setState({ todoData: [...before, updatedTodo, ...after], editingTodoId: null });
  };

  render() {
    const done = this.state.todoData.filter(el => el.done).length
    const allTodo = this.state.todoData.length - done
    const newData = this.filter(this.state.todoData, this.state.filter)

    const filteredData = newData.filter((todo) =>
      todo.title.toLowerCase().includes(this.state.searchTodo.toLowerCase())
    );
    return (
      <div style={{ width: 400 }} className='mx-auto'>
        <TodoHeader done={done} all={allTodo} />
        <TodoSearch
          onSetFilter={this.onSetFilter}
          filter={this.state.filter}
          searchInput={this.searchInput}
          searchTodo={this.state.searchTodo}
        />
        <TodoList
          todoData={filteredData}
          onDelTodo={this.delTodo}
          onImpTodo={this.impTodo}
          onDoneTodo={this.doneTodo}
          onEditTodo={this.editToggle}
        />
        <TodoAdd
           onImpTodo={this.impTodo}
           onAddtodo={this.addNewTodo}
           onSaveEdit={this.todoSaveEdit}
           editingTodoId={this.state.editingTodoId}
           onInputChange={this.todoInputChange}
           editedText={this.state.editedText}
        />

        <h1>Тузгөн Санжар Таалайбекович</h1>
      </div>
    )
  }
}
