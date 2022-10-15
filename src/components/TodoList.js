import React, {useEffect, useState} from "react";
import InputButton from './InputButton'
import './TodoList.css'

const TodoItem = ({ item, onDelete, index }) => {
  const [editMode, setEditMode] = useState(false)

  const handleToggle = () => {
    setEditMode(!editMode)
  }

  return (
    <div className="todo-item" key={index}>
      {editMode ? (<InputButton inputValue={item} />) : <div onClick={handleToggle}>{item}</div>}
      <button
        className="delete-button"
        onClick={() => onDelete(index)}
      >
        <i className="fa fa-trash" aria-hidden="true"/>
      </button>
    </div>
  )
}

export const TodoList = () => {
  const [data, setData] = useState(['buy drink', 'go to gym'])

  const handleAdd = (value) => {
    setData([...data, value])
  }
  
  const handleDelete = (index) => {
    const newData = data.filter((i, idx) => idx !== index)
    setData(newData)
  }

  return (
    <div className="todo-box">
      <div className="header">
        <InputButton onAdd={handleAdd} />
      </div>
      {data.map((item, index) => {
        return (
          <TodoItem item={item} onDelete={handleDelete} index={index} />
        )
      })}
    </div>
  )
}