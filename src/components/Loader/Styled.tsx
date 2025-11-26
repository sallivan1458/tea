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
    height: '100lvh',
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
    paddingTop:'20lvh'
});

export const LoaderText = styled(Typography)({
    fontWeight: 300,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    opacity: 0,

    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',

    '&.main-text': {
        '@media (max-width: 400px)': {
            fontSize: '2.2rem ',
        }
    },

    '&.sub-text': {
        maxWidth:'90%',
        '@media (max-width: 400px)': {
            fontSize: '1rem ',
        }
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

export const VideoContainer = styled(Box)({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '50%',
    // transform: 'translate(-50%, 50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
})
export const VideoBackground = styled('video')(({ theme }) => ({
    position: 'absolute',
    top: '40%', // Сдвигаем выше к верхней границе
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 'auto',
    maxHeight: '80%', // Ограничиваем максимальную высоту
    objectFit: 'contain', // Сохраняем пропорции
    transition: 'opacity 0.8s ease-in-out',


    [theme.breakpoints.down('md')]: {
        width: '90%',
        height: '90%',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '100%',
    }
}));


export const ImgBackground = styled('img')({
    width: '60%',
    height: 'auto',
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto'
});