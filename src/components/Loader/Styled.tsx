import { styled } from '@mui/material/styles';
import {Box, Typography, Button, keyframes} from '@mui/material';

// Анимация исчезновения
const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const LoaderContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    color: theme.palette.common.white,


    '&.fade-out': {
        animation: `${fadeOut} 2s ease-in-out forwards`,
    },
}));

export const LoaderContent = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    textAlign: 'center',
});

export const LoaderText = styled(Typography)({
    fontWeight: 300,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    opacity: 0,

    '&.main-text': {
        // Стили для основного текста
    },

    '&.sub-text': {
        fontWeight: 300,
        textTransform: 'none',
        fontStyle: 'italic',
    },
});

export const ContinueButton = styled(Button)({
    position: 'absolute',
    bottom: '80px',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.3)',
    padding: '8px 16px',
    fontSize: '0.9rem',
    fontWeight: 300,
    border: 'none',
    textTransform: 'none',
    letterSpacing: '0.05em',
    opacity: 0,
    transition: 'all 0.3s ease',
    minWidth: 'auto',

    '&:hover': {
        transform: 'none',
        boxShadow: 'none',
    },

    '&:active': {
        transform: 'none',
    },
});