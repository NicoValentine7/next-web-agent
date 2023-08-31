import React from 'react'
import Grid from '@mui/material/Grid'
import dynamic from 'next/dynamic'

const ReviewCard = dynamic(() => import('@/components/Card'), { ssr: false })

// 50個くらいのカードデータを作成
const cardsData = [...Array(50).keys()].map((i) => ({
  id: i,
  title: `Card Title ${i}`,
  subheader: `Card Subheader ${i}`,
}))

interface HomeProps {
  drawerOpen: boolean
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const Home: React.FC<HomeProps> = () => {
  return (
    <Grid container spacing={2}>
      {cardsData.map((cardData) => (
        <Grid item xs={12} sm={6} md={4} key={cardData.id}>
          <ReviewCard cardData={cardData} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Home
