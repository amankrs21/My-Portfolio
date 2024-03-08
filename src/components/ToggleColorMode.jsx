import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode({ mode, toggleColorMode }) {
    const [isHovered, setIsHovered] = React.useState(false); // Add hover state

    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                variant="text"
                onClick={toggleColorMode}
                size="small"
                aria-label="button to toggle theme"
                sx={{
                    minWidth: '32px',
                    height: '32px',
                    p: '4px',
                    mr: 1,
                    opacity: isHovered ? 1 : 0.7,
                }}
            >
                {mode === 'dark' ? <WbSunnyRoundedIcon fontSize="small" /> : <ModeNightRoundedIcon fontSize="small" />}
                &nbsp;{isHovered && <span>{mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
            </Button>
        </Box>
    );
}

ToggleColorMode.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
