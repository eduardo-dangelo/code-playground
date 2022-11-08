import React from 'react'
import './App.css'
import { TodoList } from './components/TodoList'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BasicForm from './components/BasicForm'

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
          <Route path="/basic-form" element={<BasicForm />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
