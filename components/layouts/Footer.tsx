import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <footer style={{ position: 'absolute', bottom: '0', marginBottom: '-7.5px' }}>
      <Box
        sx={{
          bgcolor: '#2d2d2d',
          height: '120px',
          width: '100vw',
          margin: '0 -0.4%',
        }}
      >
        <Typography
          variant="body1"
          component="div"
          sx={{
            flexGrow: 1,
            color: '#fff',
            padding: '15px',
            textAlign: 'center',
          }}
        >
          <Link href="/">
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
                margin: '15px',
              }}
            >
              Top
            </a>
          </Link>
          {' | '}
          <Link href="/youtube">
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
                margin: '15px',
              }}
            >
              YouTube
            </a>
          </Link>
          {' | '}
          <Link href="/blog">
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
                margin: '15px',
              }}
            >
              Blog
            </a>
          </Link>
          {' | '}
          <Link href="/contact">
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
                margin: '15px',
              }}
            >
              Contact
            </a>
          </Link>
          <br />
          <p>© Nansuta 2021</p>
        </Typography>
      </Box>
      {/* </Container> */}
    </footer>
  )
}
