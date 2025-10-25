import {Box, Typography, styled, IconButton} from '@mui/material';

export const GoodsContainer = styled(Box)({
    position: 'relative',
    willChange: 'transform',
    height: '100%',
    marginBottom: '5vh',
});

export const GoodsTitle = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    willChange: 'opacity, transform',
    marginBottom: '30px',
});

export const GoodsContent = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    padding: '20px 0',
    willChange: 'transform',
    overflow: 'hidden',

    [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start',
    }
}));

export const GoodsScrollContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '24px',
    padding: '10px 20px',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    width: '100%',
    flexGrow: 1,

    [theme.breakpoints.up('md')]: {
        overflowX: 'visible',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
        gap: '48px',
    },
}));

export const GoodsBlock = styled(Box)(({ theme }) => ({
    opacity: 0,
    minHeight: '300px',
    height: '100%',
    minWidth: '240px',
    width: 'auto',
    flex: '0 0 auto',
    willChange: 'opacity, transform',

    [theme.breakpoints.up('md')]: {
        flex: '1 1 300px',
        maxWidth: '350px',
        height: 'auto',
    },
}));

export const ScrollControls = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '16px',
    marginTop: '20px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

export const ScrollButton = styled(IconButton)({
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
});