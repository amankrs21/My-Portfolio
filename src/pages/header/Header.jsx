import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Box, AppBar, Toolbar, Button, Container, Typography, MenuItem, Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CottageIcon from '@mui/icons-material/Cottage';
import DescriptionIcon from '@mui/icons-material/Description';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

export default function Header({ mode }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (page) => {
        setOpen(!open); // Toggle the mobile menu open/close state
        if (page) {
            navigate('/' + page);
        }
    };

    const isActive = (page) => location.pathname === '/' + page;

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <img
                            src='Logo.png'
                            style={logoStyle}
                            alt="logo"
                        />
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'flex-end',
                            }}
                        >
                            <MenuItem onClick={() => navigate('/')}>
                                <CottageIcon color={isActive('home') ? "primary" : "text.primary"} />&nbsp;
                                <Typography variant="body1" fontWeight="bold" color={isActive('home') ? "primary" : "text.primary"}>
                                    Home
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/about')}>
                                <PersonIcon color={isActive('about') ? "primary" : "text.primary"} />&nbsp;
                                <Typography variant="body1" fontWeight="bold" color={isActive('about') ? "primary" : "text.primary"}>
                                    About
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/project')}>
                                <DeveloperModeIcon color={isActive('project') ? "primary" : "text.primary"} />&nbsp;
                                <Typography variant="body1" fontWeight="bold" color={isActive('project') ? "primary" : "text.primary"}>
                                    Project
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/resume')}>
                                <DescriptionIcon color={isActive('resume') ? "primary" : "text.primary"} />&nbsp;
                                <Typography variant="body1" fontWeight="bold" color={isActive('resume') ? "primary" : "text.primary"}>
                                    Resume
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={() => toggleDrawer()}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                {!open ? <MenuIcon /> : <CloseIcon />}
                            </Button>
                        </Box>
                    </Toolbar>
                    <Collapse in={open}>
                        <Box
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                bgcolor: mode === 'light' ? 'rgba(241, 241, 241, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px',
                                textAlign: 'center',
                                p: 2,
                            }}
                        >
                            <MenuItem onClick={() => toggleDrawer('home')} sx={{ justifyContent: 'center', width: '100%' }}>
                                <CottageIcon color={isActive('home') ? "primary" : "text.primary"} />&nbsp;
                                <Typography variant="body1" fontWeight="bold" color={isActive('home') ? "primary" : "text.primary"}>
                                    Home
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => toggleDrawer('about')} sx={{ justifyContent: 'center', width: '100%' }}>
                                <PersonIcon color={isActive('about') ? "primary" : "text.primary"} />&nbsp;
                                <Typography variant="body1" fontWeight="bold" color={isActive('about') ? "primary" : "text.primary"}>
                                    About
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => toggleDrawer('project')} sx={{ justifyContent: 'center', width: '100%' }}>
                                <DeveloperModeIcon color={isActive('project') ? "primary" : "text.primary"} />&nbsp;
                                <Typography variant="body1" fontWeight="bold" color={isActive('project') ? "primary" : "text.primary"}>
                                    Project
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => toggleDrawer('resume')} sx={{ justifyContent: 'center', width: '100%' }}>
                                <DescriptionIcon color={isActive('resume') ? "primary" : "text.primary"} />&nbsp;
                                <Typography variant="body1" fontWeight="bold" color={isActive('resume') ? "primary" : "text.primary"}>
                                    Resume
                                </Typography>
                            </MenuItem>
                        </Box>
                    </Collapse>
                </Container>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
};
