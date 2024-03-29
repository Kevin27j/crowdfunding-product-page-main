import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

const MainButton = styled(Button)({
    borderRadius: '30px',
    boxShadow: 'none',
    backgroundColor: 'hsl(176, 50%, 47%)',
    color: 'white',
    padding: '15px 30px'
})


function StatsCard() {
    return (
        <div className='flex'>
            <Card sx={{ width: '320px', padding: '30px 10px', marginBottom: '20px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }} variant='outlined'>
                <CardContent sx={{ padding: "20px 15px", textAlign: 'left' }}>

                    <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: '10px' }}>
                        About this project
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: "16px", marginBottom: '20px' }}>
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.

                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                        to allow notepads, pens, and USB sticks to be stored under the stand.
                    </Typography>

                    <Stack spacing={3}>

                        <Card sx={{ width: '260px', padding: '30px 10px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }} variant='outlined'>
                            <CardContent sx={{ padding: "10px 15px", textAlign: 'left' }}>
                                <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: '10px' }}>
                                    Bamboo Stand
                                </Typography>
                                <Typography color='hsl(176, 50%, 47%)' variant="h5" sx={{ fontSize: "17px", fontWeight: "bold", marginBottom: '10px' }}>
                                    Pledge $25 or more
                                </Typography>
                                <Typography color="text.secondary" sx={{ fontSize: "16px", marginBottom: '20px' }}>
                                    You get an ergonomic stand made of natural bamboo. You&apos;ve helped us launch our promotional campaign, and
                                    you’ll be added to a special Backer member list.
                                </Typography>
                                <Typography>
                                    101 left
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "left" }}>
                                <MainButton sx={{ fontWeight: "bold", whiteSpace: "nowrap", fontSize: "13px" }} variant="text">Select Reward</MainButton>
                            </CardActions>
                        </Card>

                        <Card sx={{ width: '260px', padding: '30px 10px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }} variant='outlined'>
                            <CardContent sx={{ padding: "10px 15px", textAlign: 'left' }}>
                                <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: '10px' }}>
                                    Black Edition Stand
                                </Typography>
                                <Typography color='hsl(176, 50%, 47%)' variant="h5" sx={{ fontSize: "17px", fontWeight: "bold", marginBottom: '10px' }}>
                                    Pledge $75 or more
                                </Typography>
                                <Typography color="text.secondary" sx={{ fontSize: "16px", marginBottom: '20px' }}>
                                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                                    member list. Shipping is included.
                                </Typography>
                                <Typography>
                                    64 left
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "left" }}>
                                <MainButton sx={{ fontWeight: "bold", whiteSpace: "nowrap", fontSize: "13px" }} variant="text">Select Reward</MainButton>
                            </CardActions>
                        </Card>

                        <Card sx={{ width: '260px', padding: '30px 10px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }} variant='outlined'>
                            <CardContent sx={{ padding: "10px 15px", textAlign: 'left' }}>
                                <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: '10px' }}>
                                    Mahogany Special Edition
                                </Typography>
                                <Typography color='hsl(176, 50%, 47%)' variant="h5" sx={{ fontSize: "17px", fontWeight: "bold", marginBottom: '10px' }}>
                                    Pledge $200 or more
                                </Typography>
                                <Typography color="text.secondary" sx={{ fontSize: "16px", marginBottom: '20px' }}>
                                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                                    to our Backer member list. Shipping is included.
                                </Typography>
                                <Typography>
                                    0 left
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "left" }}>
                                <MainButton sx={{ fontWeight: "bold", whiteSpace: "nowrap", fontSize: "13px" }} variant="text">Select Reward</MainButton>
                            </CardActions>
                        </Card>


                    </Stack>
                </CardContent>
            </Card>
        </div>
    )
}

export default StatsCard;