import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Tooltip } from '@mui/material';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://mui.com/">Sitemark&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 1, sm: 2 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Box sx={{ ml: '-15px' }}>
                        <img
                            src={
                                'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                            }
                            style={logoStyle}
                            alt="logo of sitemark"
                        />
                    </Box>
                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <Tooltip title="GitHub">
                        <IconButton
                            color="inherit"
                            onClick={() => window.open('https://github.com/amankrs21', '_blank', 'noopener,noreferrer')}
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <FacebookIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Twitter">
                        <IconButton
                            color="inherit"
                            onClick={() => window.open('https://twitter.com/amankrs21', '_blank', 'noopener,noreferrer')}
                            aria-label="X"
                            sx={{ alignSelf: 'center' }}
                        >
                            <XIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                        <IconButton
                            color="inherit"
                            onClick={() => window.open('https://www.linkedin.com/in/amankrs21', '_blank', 'noopener,noreferrer')}
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box>
        </Container>
    );
}