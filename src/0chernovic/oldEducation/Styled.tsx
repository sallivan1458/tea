import {Box, Typography, styled} from '@mui/material';

export const EducationContainer = styled(Box)({
    position: 'relative',
    willChange: 'transform',
    marginBottom: '20vh',
    '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform:'translateX(-50%)',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #010101 0%, transparent 100%)',
        zIndex: -1,
        pointerEvents: 'none',
    },
});

export const EducationTitle = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    willChange: 'opacity, transform',
    marginBottom: '30px',
});


export const EducationContent = styled(Box)(({ theme }) => ({
    height: '80vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding:4,
    gap: '20px',
    willChange: 'transform',

    // Стили для мобильных экранов
    [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        gap: '20px',
        height: '70vh',
        minHeight: '500px',
    },
}));

export const EducationBlock = styled(Box)(({ theme }) => ({
    opacity: 0,
    minHeight: '150px',
    height: '90%',
    maxHeight: '500px',
    flex: 1,
    maxWidth: '30%',
    willChange: 'opacity, transform',

    [theme.breakpoints.down('md')]: {
        minHeight: '80px',
        maxHeight: 'none',
        height: 'auto',
        flex: 'none',
        display: 'flex', // Добавляем flex для лучшего контроля
        flexDirection: 'column',

        // Первые два элемента: 50% ширины и 50% высоты
        '&:nth-of-type(1), &:nth-of-type(2)': {
            width: 'calc(50% - 10px)',
            flex: '0 0 calc(50% - 10px)',
            height: 'calc(60% - 10px)',
            maxWidth: 'calc(50% - 10px)',
            maxHeight: 'calc(60% - 10px)',
        },

        // Третий элемент: 100% ширины и 50% высоты
        '&:nth-of-type(3)': {
            width: '100%',
            flex: '0 0 100%',
            height: 'calc(40% - 10px)',
            maxWidth: '100%',
            maxHeight: 'calc(40% - 10px)',
        },
    },

}));