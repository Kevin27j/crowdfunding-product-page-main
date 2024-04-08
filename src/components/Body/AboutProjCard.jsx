import { useState } from 'react';
import {Box, Stack, Card, CardContent, CardActions, Typography } from '@mui/material';
import data from '../../data'
import MainButton from '../MainButton';

function StatsCard() {
    const [cards] = useState(data);

    return (
        <Box className='flex'>
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

                        {cards.map(card => {
                            const { id, title, subtitle, description, quantity, selectButton } = card

                            return (
                                <Card key={id} sx={{ width: '260px', padding: '30px 10px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }} variant='outlined'>
                                    <CardContent sx={{ padding: "10px 15px", textAlign: 'left' }}>
                                        <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: '10px' }}>
                                            {title}
                                        </Typography>
                                        <Typography color='hsl(176, 50%, 47%)' variant="h5" sx={{ fontSize: "17px", fontWeight: "bold", marginBottom: '10px' }}>
                                            {subtitle}
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ fontSize: "16px", marginBottom: '20px' }}>
                                            {description}
                                        </Typography>
                                        <Typography>
                                            {quantity} left
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "left" }}>
                                        <MainButton title={selectButton}/>
                                    </CardActions>
                                </Card>
                            )
                        })}

                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export default StatsCard;