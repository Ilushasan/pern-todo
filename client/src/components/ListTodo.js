import React, {useState, useEffect} from "react";
import EditTodo from "./EditTodo";
import './ListTodo.css'

const ListTodo = () => {

  const [todos, setTodos] = useState([])
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      })
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const jsonData = await response.json()
      setTodos(jsonData)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getTodos()
  }, [])

  return(
    <div>
      <h1 className="todo-header">List Todo</h1>
      {todos.length > 0
      ?<div>
      {todos.map(todo => (
        <div className="todo_list" key={todo.todo_id}>
          <div className="todo_list-description">{todo.description}</div>
          <div className="todo_list-btn">
            <div>
              <EditTodo todo={todo} id={todo.todo_id}/>
            </div>
            <div><button 
              onClick={() => deleteTodo(todo.todo_id)}>Delete</button></div>
          </div>
        </div>
      ))}
    </div>
    :<h1 className="todo_list-header">Todo list empty</h1>
    }
    </div>
  )
}

export default ListTodo