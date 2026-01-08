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
    marginBottom: 'calc(var(--vh, 1vh) * 20)',
    '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        height: 'calc(var(--vh, 1vh) * 100)',
        background: 'linear-gradient(to bottom, #000000 0%, transparent 100%)',
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

export const ContentWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(6),
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

export const TextContent = styled(Box)(({theme}) => ({
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        maxHeight: 'none',
        gap: theme.spacing(1.5),
    },
}));

export const NameTypography = styled(Typography)({
    fontWeight: 'bold',
    color: 'primary.main',
    mb: 1,
    opacity: '0',
});

export const PhotoWrapper = styled(Box)({
    flex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
});

export const PhotoContainer = styled(Box)({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '0%',
        left: '-8%',
        right: '-8%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(25,118,210,0.09) 45%,  transparent 90%)',
        borderRadius: '50%',
        filter: 'blur(8px)',
        pointerEvents: 'none',
        zIndex: 1,
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        bottom: '0%',
        left: '-8%',
        right: '-8%',
        height: '100%',
        color:'rgba(190,120,255,0.6)',
        background: 'radial-gradient(circle at center, rgba(190,120,255,0.6) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(8px)',
        pointerEvents: 'none',
        zIndex: 1,
    },
});

export const Photo = styled('img')(({theme}) => ({
    height: 'auto',
    maxHeight: '500px',
    borderRadius: '100px',
    objectFit: 'contain',
    width: '100%',
    position: 'relative',
    zIndex: 2,

    [theme.breakpoints.up('md')]: {
        width: '100%',
    },
}));

export const InfoBlock = styled(Box)(({theme}) => ({
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
    maxHeight: 'calc(var(--vh, 1vh) * 80 - 120px)',
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