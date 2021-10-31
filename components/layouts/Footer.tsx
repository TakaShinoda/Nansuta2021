import React from 'react'
import { Container, Box, Grid, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <>
      <Container sx={{ width: '100vw', position: 'relative'}}>
        <Box sx={{ bgcolor: '#2d2d2d', height: '240px', margin:'0 -200%', padding:'0 200%' }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: '#fff' }}
          >
            xxx
          </Typography>
        </Box>
      </Container>
    </>
  )
}
