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

// const CommTypography = styled(Typography)({
//   fontFamily: '"Commissioner", sans-serif'
// })

function TopCard() {
  return (
    <div className='flex topCardPos'>
      <Card sx={{ width: '320px', padding: '30px 10px',  marginBottom: '20px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }}>
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
          <MainButton sx={{ fontWeight: "bold",  whiteSpace: "nowrap", fontSize: "13px"  }} variant="text">Back this project</MainButton>
          <Button variant="text" size='small'> <img src={BookmarkButtonLogo}/></Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default TopCard