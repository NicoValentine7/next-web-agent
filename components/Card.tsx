import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CardActionArea } from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Paper from '@mui/material/Paper'

interface CardData {
  id: number
  title: string
  subheader: string
}

interface ReviewCardProps {
  cardData: CardData
}

export default function ReviewCard({ cardData }: ReviewCardProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const handleCardClick = () => {
    setDrawerOpen(true)
  }

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  return (
    <div>
      <Card>
        <CardActionArea onClick={handleCardClick}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={cardData.title}
            subheader={cardData.subheader}
          />
          <CardMedia
            component="img"
            height="194"
            image="/pc-girls2.png"
            alt="PC Girls"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Next.jsとNode.jsを使ったWebエンジニアを募集しています。
              それ以外にも、React.jsやVue.jsなどのフロントエンドの経験があると尚良いです。
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Paper sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6">カードの詳細</Typography>
          <Typography variant="body1">
            ここにカードの詳細情報を表示します。詳細内容は、カードごとに異なる場合があります。
          </Typography>
        </Paper>
      </SwipeableDrawer>
    </div>
  );
}
