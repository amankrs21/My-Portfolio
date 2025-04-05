import React from 'react';
import { Box } from '@mui/material';
import {
    Container, IconButton, Stack, Typography, Tooltip
} from '@mui/material';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


// Latest Copyright component
function Copyright() {
    return (
        <Typography variant="subtitle2" component="h2" color="text.secondary">
            {'Copyright © '}<strong style={{ color: '#0a66c2' }}>{"Aman's "}</strong>
            {new Date().getFullYear()}
        </Typography>
    );
}


// Footer component
export default function Footer() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    pt: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box
                    component="img"
                    src="Logo.png"
                    sx={{
                        height: 'auto',
                        width: '150px',
                        mb: { xs: 0, md: 0 },
                    }}
                    alt="logo of sitemark"
                />
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1}
                    sx={{
                        mb: { xs: 1, md: 0 },
                        color: 'text.secondary',
                    }}
                >
                    <Tooltip arrow title="GitHub">
                        <IconButton
                            color="primary"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                            onClick={() => window.open('https://github.com/amankrs21', '_blank', 'noopener,noreferrer')}
                        >
                            <FacebookIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="X.com">
                        <IconButton
                            color="primary"
                            aria-label="X.com"
                            sx={{ alignSelf: 'center' }}
                            onClick={() => window.open('https://twitter.com/amankrs21', '_blank', 'noopener,noreferrer')}
                        >
                            <XIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="LinkedIn">
                        <IconButton
                            color="primary"
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center' }}
                            onClick={() => window.open('https://www.linkedin.com/in/amankrs21', '_blank', 'noopener,noreferrer')}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Instagram">
                        <IconButton
                            color="primary"
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center' }}
                            onClick={() => window.open('https://www.instagram.com/amankrs21', '_blank', 'noopener,noreferrer')}
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
                <Box sx={{ mb: { xs: 2, md: 0 } }}>
                    <Copyright />
                </Box>
            </Box>
        </Container>
    );
}