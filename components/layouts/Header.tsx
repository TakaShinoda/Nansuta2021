import React from 'react'
import Link from 'next/link'
import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import Lottie from 'react-lottie'
import runnerJson from '../../runner.json'

export const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: runnerJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          sx={{ boxShadow: 'none' }}
        >
          <Toolbar>
            <Box sx={{ padding: 1 }}>
              <Lottie options={defaultOptions} height={45} width={25} />
            </Box>

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
              <Link href="/">
                <a style={{ textDecoration: 'none', color: 'inherit' }}>Top</a>
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ textAlign: 'right', flexGrow: 0.1 }}
            >
              <Link href="/youtube">
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  YouTube
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
