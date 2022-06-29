import React, {useState} from "react";
import './InputTodo.css'

const InputTodo = () => {
  
  const [description, setDescription] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {description}
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      setDescription('')
    } catch (e) {
      console.log(e.message)
    }

    window.location = '/'
  }

  return (
    <div>
      <h1 className='todo-header'>
        Pern Todo List
      </h1>
      <form onSubmit={onSubmitForm} className='todo-form'>
        <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default InputTodo