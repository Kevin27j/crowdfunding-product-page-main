import { Box } from '@mui/material';
import bookmarkLogo from '../../assets/images/logo.svg'
import '../../index.css'
import MobileMenu from './MobileMenu';

function Header() {
    return (
        <Box className='header flex'>
            <img className='header-child' src={bookmarkLogo} />
            <MobileMenu />
        </Box>
    );
}

export default Header