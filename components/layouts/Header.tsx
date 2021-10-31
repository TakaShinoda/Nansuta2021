import React from 'react'
import Link from 'next/link'
import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import { inherits } from 'util'

// import { red } from '@mui/material/colors'
// const color = red[600]

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          sx={{ boxShadow: 'none' }}
        >
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  Nansuta
                </a>
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ textAlign: 'right', flexGrow: 0.1 }}
            >
              <Link href="/service">
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  Service
                </a>
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ textAlign: 'right', flexGrow: 0.1 }}
            >
              <Link href="/company">
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  Company
                </a>
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ textAlign: 'right', flexGrow: 0.1 }}
            >
              <Link href="/blog">
                <a style={{ textDecoration: 'none', color: 'inherit' }}>Blog</a>
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ textAlign: 'right', flexGrow: 0.1, paddingRight: 10 }}
            >
              <Link href="/contact">
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  Contact
                </a>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
