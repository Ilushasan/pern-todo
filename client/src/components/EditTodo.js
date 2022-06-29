import React, {useState} from "react";
import './EditTodo.css'

const EditTodo = ({todo}) => {
  const [modalActive, setModalActive] = useState(false)
  const [description, setDescription] = useState(todo.description)

  const modalHendler = () => {
    setDescription(todo.description)
    setModalActive(true)
  }

  const updateDescription = async (e) => {
    e.preventDefault()
    try {
      const body = {description}
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })

      window.location = '/'
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
    <button onClick={() => modalHendler()}>Edit</button>
    <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
      <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
        <h1 className="todo_list-header">EditTodo</h1>
        <div>
          <div className='todo-form'>
            <input type='text' value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <button onClick={e=> updateDescription(e)}>Edit</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditTodo