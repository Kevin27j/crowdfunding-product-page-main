import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MastercraftLogo from '../assets/images/logo-mastercraft.svg'


function TopCard() {
  return (
    <div className='flex topCardPos'>
      <Card sx={{ maxWidth: '320px', padding: '10px' }}>
        <img className='mastercraftLogo' src={MastercraftLogo} />
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5">
            Mastercraft Bamboo Monitor Riser
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </Typography>
        </CardContent>
        <CardActions>
        <Button>Back this project</Button>
        <Button>Bookmark</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default TopCard