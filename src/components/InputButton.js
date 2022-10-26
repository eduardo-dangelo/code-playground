import React, { useState, useCallback } from 'react'

const InputButton = ({ inputValue = '', onAdd }) => {
  const [value, setValue] = useState(inputValue)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleAdd = () => {
    setValue('')
    onAdd(value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div>
      <input
        value={value}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        className="input"
        type="text"
      />
      <button onClick={handleAdd} className="button">Add</button>
    </div>
  )
}

export default InputButton