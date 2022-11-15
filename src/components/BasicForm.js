import { Card, Box } from '@mui/material'
import React, { useState } from 'react'

const BasicForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    window.alert(`name: ${name} email: ${email}`)
  }

  return (
    <Card sx={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </Box>
        <button type="submit">Submit</button>
      </form>
    </Card>
  )
}

export default BasicForm
