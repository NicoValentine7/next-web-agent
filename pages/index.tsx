//simple web app that displays a list of items
//use tsx for typescript
//use mui/material

import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Layout from '@/components/Layout'
import Home from '@/components/Home'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function Index() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setDrawerOpen(open)
    }

  return (
    <Layout drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            <Home drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
          </Box>
        </Container>
      </ThemeProvider>
    </Layout>
  )
}
