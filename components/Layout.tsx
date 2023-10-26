import React from 'react'
import AppBarComponent from './AppBarComponent'
import Head from 'next/head'
import {Container, Grid} from '@mui/material'

interface LayoutProps {
  children: React.ReactNode
  drawerOpen?: boolean
  toggleDrawer?: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const Layout: React.FC<LayoutProps> = ({
  children,
  drawerOpen,
  toggleDrawer,
}) => {
  return (
    <>
      <Head>
        <title>project α</title>
        <link rel="icon" href="/banana.svg" />
      </Head>
      <AppBarComponent />
      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={2}>
          <main>
            {children}
          </main>
        </Grid>
      </Container>
    </>
  )
}

export default Layout
