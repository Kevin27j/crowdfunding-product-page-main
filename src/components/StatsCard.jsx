import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

function StatsCard() {
    return (
        <div className='flex'>
            <Card sx={{ width: '320px', padding: '30px 10px', marginBottom: '20px', textAlign: 'center', borderRadius: '.7rem', boxShadow: 'none' }}>
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

                    <BorderLinearProgress  variant="determinate" value={80} />
                </CardContent>

            </Card>
        </div>
    )
}

export default StatsCard;
