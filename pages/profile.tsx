import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Layout from '@/Layout'

const Profile: React.FC = () => {
  return (
    <Layout>
      {' '}
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Your Profile
          </Typography>
          {/* ここにプロフィール詳細を追加 */}
          <Typography variant="body1" gutterBottom>
            Name: John Doe
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: john.doe@example.com
          </Typography>
          {/* その他の情報 */}
        </Box>
      </Container>
    </Layout>
  )
}

export default Profile
