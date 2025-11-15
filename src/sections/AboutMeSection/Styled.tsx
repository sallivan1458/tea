// Styled components
import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";

export const AboutMeContainer = styled(Box)({
    height: '100%',
    // maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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

export const AboutMeTitle = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    willChange: 'opacity, transform',
    marginBottom: '30px',
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        gap: theme.spacing(3),
        textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(2),
    },
}));

export const TextContent = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        maxHeight: 'none',
        gap: theme.spacing(1.5),
    },
}));

export const PhotoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
        flex: '0 0 35%',
    },
}));

export const Photo = styled('img')(({theme}) => ({
    height: 'auto',
    maxHeight: '500px',
    borderRadius: '20px',
    objectFit: 'contain',
    opacity: '0',
    width: '50%',
    [theme.breakpoints.up('md')]: {
        width: '100%',
    },
}));

export const InfoBlock = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: theme.spacing(2),
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    opacity: '0',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1.5),
    },
}));

export const ScrollableContent = styled(Box)({
    flex: 1,
    maxHeight: 'calc(80vh - 120px)',
    '&::-webkit-scrollbar': {
        width: '4px',
    },
    '&::-webkit-scrollbar-track': {
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '2px',
    },
});