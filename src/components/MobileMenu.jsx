import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HamIcon from '../assets/images/icon-hamburger.svg'
import CloseIcon from '../assets/images/icon-close-menu.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    width: '280px',
                    maxWidth: '280px',
                    margin: '0 auto',
                },
            },
        },
    },
});


function MobileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='header-child'>
                <IconButton
                    id="menu-icon"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <img src={open ? CloseIcon : HamIcon} alt='Menu icon' />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 60, left: 47 }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}

                    disableScrollLock
                    MenuListProps={{
                        'aria-labelledby': 'menu-icon',
                    }}
                >
                    <MenuItem onClick={handleClose}>About</MenuItem>
                    <MenuItem onClick={handleClose}>Discover</MenuItem>
                    <MenuItem onClick={handleClose}>Get Started</MenuItem>
                </Menu>
            </div>
        </ThemeProvider>
    )
}

export default MobileMenu