import { styled, Box, Typography } from '@mui/material';

export const StyledGreetingSection = styled(Box)({
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#010101',
        zIndex: -1,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100vw',
        height: '50vh',
        background: 'linear-gradient(to top, #010101, transparent)',
        zIndex: 0,
    }
});

export const StyledBackgroundImage = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,

    '@media (max-width: 900px)': {
        backgroundSize: 'cover',
    },

    '@media (orientation: portrait)': {
        backgroundSize: 'cover',
    },
});

export const StyledContentBox = styled(Box)({
    position: 'relative',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 1,
    paddingBottom: '32px',
});

export const StyledTypography = styled(Typography)({
    position:'absolute',
    bottom:'10%',
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    willChange: 'transform',
});

export const StyledAdditionalBox = styled(Box)({
    position: 'relative',
    height: '30vh',
    willChange: 'transform',
    '&::after': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform:'translateX(-50%)',
        width: '100vw',
        height: '30vh',
        background: '#010101',
        zIndex: -1,
        pointerEvents: 'none',
    },
});