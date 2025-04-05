import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    AppBar, Toolbar, Button, Container, Typography, MenuItem, Collapse, Tooltip, IconButton
} from '@mui/material';
import {
    Menu, Close, Person, Cottage, Description, DeveloperMode, WbSunnyRounded, ModeNightRounded
} from '@mui/icons-material';


// Header component
export default function Header({ mode, modeChange }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (page) => {
        setOpen(!open);
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
                    mt: 1,
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
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
                        <div style={{ cursor: 'pointer' }} onClick={() => window.location.reload()}>
                            <img src='Logo.png' alt="logo" className='header-logo' />
                        </div>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                        >
                            <MenuItem onClick={() => navigate('/')}>
                                <Cottage color={isActive('home') ? "primary" : "text.primary"} />
                                <Typography variant="body1" fontWeight="bold" color={isActive('home') ? "primary" : "text.primary"}>
                                    Home
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/about')}>
                                <Person color={isActive('about') ? "primary" : "text.primary"} />
                                <Typography variant="body1" fontWeight="bold" color={isActive('about') ? "primary" : "text.primary"}>
                                    About
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/project')}>
                                <DeveloperMode color={isActive('project') ? "primary" : "text.primary"} />
                                <Typography variant="body1" fontWeight="bold" color={isActive('project') ? "primary" : "text.primary"}>
                                    Project
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/resume')}>
                                <Description color={isActive('resume') ? "primary" : "text.primary"} />
                                <Typography variant="body1" fontWeight="bold" color={isActive('resume') ? "primary" : "text.primary"}>
                                    Resume
                                </Typography>
                            </MenuItem>
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { xs: 'none', md: 'block' },
                                    marginLeft: '5px',
                                }}
                            >
                                <Tooltip arrow placement="bottom" title="Toggle theme">
                                    <IconButton onClick={modeChange}>
                                        {mode === 'light' ? (
                                            <ModeNightRounded color='secondary' />
                                        ) : (
                                            <WbSunnyRounded color='warning' />
                                        )}
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={() => toggleDrawer()}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                {!open ? <Menu /> : <Close />}
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
                                <Cottage color={isActive('home') ? "primary" : "text.primary"} />
                                <Typography variant="body1" fontWeight="bold" color={isActive('home') ? "primary" : "text.primary"}>
                                    Home
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => toggleDrawer('about')} sx={{ justifyContent: 'center', width: '100%' }}>
                                <Person color={isActive('about') ? "primary" : "text.primary"} />
                                <Typography variant="body1" fontWeight="bold" color={isActive('about') ? "primary" : "text.primary"}>
                                    About
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => toggleDrawer('project')} sx={{ justifyContent: 'center', width: '100%' }}>
                                <DeveloperMode color={isActive('project') ? "primary" : "text.primary"} />
                                <Typography variant="body1" fontWeight="bold" color={isActive('project') ? "primary" : "text.primary"}>
                                    Project
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => toggleDrawer('resume')} sx={{ justifyContent: 'center', width: '100%' }}>
                                <Description color={isActive('resume') ? "primary" : "text.primary"} />
                                <Typography variant="body1" fontWeight="bold" color={isActive('resume') ? "primary" : "text.primary"}>
                                    Resume
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={modeChange}
                                sx={{ justifyContent: 'center', width: '100%' }}
                            >
                                <Typography variant="body1" fontWeight="bold">
                                    {mode === 'light' ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
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
    modeChange: PropTypes.func.isRequired,
};