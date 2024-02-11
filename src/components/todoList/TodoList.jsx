import React from 'react'
import TodoListItem from '../todoListItem/TodoListItem'

const TodoList = ({ todoData, onDelTodo, onImpTodo, onDoneTodo,  onEditTodo,
  editingTodoId,
  editedText,
  onInputChange,
  onSaveEdit,}) => {
    
    if (todoData.length === 0) {
        return <span style={{ color: 'red' }}>Бул жерде списоктор жок</span>;
      }

    const elements=todoData.map(el=>{
        return(
            <li className='list-group-item' key={el.id}>
                <TodoListItem title={el.title} id={el.id} imp={el.important}  done={el.done} onDelTodo={onDelTodo} onImpTodo={onImpTodo} onDoneTodo={onDoneTodo} onEditTodo={onEditTodo}
                editing={editingTodoId === el.id}
                editedText={editedText}
                onInputChange={onInputChange}
                onSaveEdit={onSaveEdit}/>
                </li>
        )
    })
  return (
    <ul className='list-group' >
        {elements}
        </ul>
  )
}

export default TodoList