import React from 'react'
import './App.css'
import { TodoList } from './components/TodoList'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BasicForm from './components/BasicForm'
import Images from './components/Images'

const siteData = [
  { name: 'Todo List', route: '/todo-list', element: <TodoList /> },
  { name: 'Basic Form', route: '/basic-form', element: <BasicForm /> },
  { name: 'Images', route: '/images', element: <Images /> },
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: 1,
          }}
        >
          <Routes>
            {siteData.map((item) => {
              return <Route key={item.route} path={item.route} element={item.element} />
            })}
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
