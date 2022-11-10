import { Card, Box } from '@mui/material'
import React from 'react'

const BasicForm = () => {
  return (
    <Card sx={{ padding: '20px' }}>
      <form>
        <Box sx={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value="" />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value="" />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value="" />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirm-password" value="" />
        </Box>
        <button type="submit">Submit</button>
      </form>
    </Card>
  )
}

export default BasicForm
