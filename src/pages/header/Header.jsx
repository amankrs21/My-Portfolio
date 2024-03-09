import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
    Box, AppBar, Toolbar, Button, Container, Typography, MenuItem, Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

export default function Header({ mode }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const pages = ['Home', 'About', 'Project', 'Resume'];

    const toggleDrawer = () => () => {
        setOpen(!open);
    };

    const handlePage = (page) => {
        navigate('/' + (page === 'Home' ? '' : page.toLowerCase()));
        setOpen(false);
    };

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
                            src={'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'}
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handlePage(page)}>
                                    <Typography variant="body1" color="text.primary" fontWeight="bold">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer()}
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handlePage(page)} sx={{ justifyContent: 'center', width: '100%' }}>
                                    <Typography textAlign="center" fontWeight="bold">{page}</Typography>
                                </MenuItem>
                            ))}
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
