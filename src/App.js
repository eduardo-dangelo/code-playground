import React from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './components/TodoList'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material'

const siteData = [
  { name: 'Todo List', route: '/todo-list' },
  { name: 'Basic Form', route: '/basic-form', component: TodoList }
]

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Sidebar items={siteData} />
      <TodoList />
    </Box>
  )
}

export default App
