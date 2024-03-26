import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MastercraftLogo from '../assets/images/logo-mastercraft.svg'
import BookmarkButtonLogo from '../assets/images/icon-bookmark.svg'
import { styled } from '@mui/material';

const MainButton = styled(Button)({
  borderRadius: '30px', 
  boxShadow: 'none', 
  backgroundColor: 'hsl(176, 50%, 47%)',
  color: 'white',
  padding: '15px 30px'
})

function TopCard() {
  return (
    <div className='flex topCardPos'>
      <Card sx={{ maxWidth: '320px', padding: '30px 10px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }}>
        <img className='mastercraftLogo' src={MastercraftLogo} />
        <CardContent>
          <Typography variant="h5">
            Mastercraft Bamboo Monitor Riser
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </Typography>
        </CardContent>
        <CardActions>
          <MainButton variant="text">Back this project</MainButton>
          <Button variant="text" size='small'> <img src={BookmarkButtonLogo}/></Button>
          {/* <AltButton variant="contained"></AltButton> */}
        </CardActions>
      </Card>
    </div>
  )
}

export default TopCard