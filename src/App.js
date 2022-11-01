import React from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './components/TodoList'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <TodoList />
    </div>
  )
}

export default App
