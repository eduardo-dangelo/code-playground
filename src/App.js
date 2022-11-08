import React from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './components/TodoList'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const siteData = [
  { name: 'Todo List', route: '/todo-list' },
  { name: 'Basic Form', route: '/basic-form' },
]

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Sidebar items={siteData} />
        <Routes>
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
