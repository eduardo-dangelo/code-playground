import { Box } from '@mui/system'
import { List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import React from 'react'

const Sidebar = ({ items }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: '#2196f3',
        color: 'white',
        height: '100vh'
      }}
    > 
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemText primary='CODE PLAYGROUND' />
          </ListItem> 
          <Divider/>
          {items.map((item, index) => {
            return (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </nav>
    </Box>
  )
}

export default Sidebar