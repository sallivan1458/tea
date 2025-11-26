import { styled, Box, Typography } from '@mui/material';

export const StyledGreetingSection = styled(Box)({
    position: 'relative',
    height: 'calc(var(--vh, 1vh) * 100)',
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
        height: 'calc(var(--vh, 1vh) * 50)',
        background: 'linear-gradient(to top, #010101, transparent)',
        zIndex: 0,
    }
});


export const StyledBackgroundImage = styled(Box)({
    position: 'absolute',
    top: 0,
    left: "50%",
    height: 'calc(var(--vh, 1vh) * 100)',
    width: '100%',
    transform: 'translateX(-50%)',
    backgroundSize: 'contain',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,


    '@media (max-width: 900px)': {
        width: '250%',
        backgroundSize: 'contain',
    },

    '@media (orientation: portrait)': {
        backgroundSize: 'contain',
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
    fontWeight: 300,
    '@media (max-width: 400px)': {
        fontSize: '2.2rem ',
    }
});

export const StyledAdditionalBox = styled(Box)({
    position: 'relative',
    height: 'calc(var(--vh, 1vh) * 30)',
    willChange: 'transform',
    '&::after': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform:'translateX(-50%)',
        width: '100vw',
        height: 'calc(var(--vh, 1vh) * 30)',
        background: '#010101',
        zIndex: -1,
        pointerEvents: 'none',
    },
});