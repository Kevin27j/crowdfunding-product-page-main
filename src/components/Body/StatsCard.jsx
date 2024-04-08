import {Box, Card, CardContent, Typography, Divider} from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    cyan: {
        moderate: 'hsl(176, 50%, 47%)',
        dark: 'hsl(176, 72%, 28%)'
    }
})

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#F4F4F4',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.cyan.moderate
    },
  }));

function StatsCard() {
    return (
        <Box className='flex'>
            <Card sx={{ width: '320px', padding: '30px 10px', marginBottom: '20px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }} variant='outlined'>
                <CardContent sx={{ padding: "20px 15px" }}>
                    {/* Money backed */}
                    <Typography variant="h5" sx={{ fontSize: "33px", fontWeight: "bold", marginBottom: '10px' }}>
                        $89,914
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: "16px", marginBottom: '20px' }}>
                        of $100,000 backed
                    </Typography>

                    <Divider sx={{ width: '100px', margin: '0 auto', marginBottom: '20px' }} />

                    {/* Tot backers */}
                    <Typography variant="h5" sx={{ fontSize: "33px", fontWeight: "bold", marginBottom: '10px' }}>
                        5,007
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: "16px", marginBottom: '20px' }}>
                        total backers
                    </Typography>

                    <Divider sx={{ width: '100px', margin: '0 auto', marginBottom: '20px' }} />

                    {/* days left */}
                    <Typography variant="h5" sx={{ fontSize: "33px", fontWeight: "bold", marginBottom: '10px' }}>
                        56
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: "16px", marginBottom: '30px' }}>
                        days left
                    </Typography>

                    <ThemeProvider theme={theme}>
                    <BorderLinearProgress variant="determinate" value={80} />
                    </ThemeProvider>
                </CardContent>

            </Card>
        </Box>
    )
}

export default StatsCard;
