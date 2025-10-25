import { styled, Box, Typography } from '@mui/material';

export const StyledGreetingSection = styled(Box)({
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#010101',
        zIndex: -2,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100vw',
        height: '30vh',
        background: 'linear-gradient(to top, #010101, transparent)',
        zIndex: 0,
    }
});

export const StyledTieferliedIMG = styled('img')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    objectPosition: 'center center',
    [theme.breakpoints.up('md')]: {
        objectFit: 'contain',
    },
}));

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
    '&::before': {
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