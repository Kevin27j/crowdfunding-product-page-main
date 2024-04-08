import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import MastercraftLogo from '../../assets/images/logo-mastercraft.svg'
import BookmarkButtonLogo from '../../assets/images/icon-bookmark.svg'
import MainButton from '../MainButton';

function TopCard() {
  return (
    <Box className='flex topCardPos'>
      <Card sx={{ width: '320px', padding: '30px 10px', marginBottom: '20px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }} variant='outlined'>
        <img className='mastercraftLogo' src={MastercraftLogo} />
        <CardContent sx={{ padding: "20px 15px" }}>
          <Typography variant="h5" sx={{ fontSize: "22px", fontWeight: "bold", marginBottom: 1.5 }}>
            Mastercraft Bamboo Monitor Riser
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "16px", mb: 1.5 }}>
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <MainButton title='Back this project' />
          <Button variant="text" size='small'> <img src={BookmarkButtonLogo} /></Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default TopCard