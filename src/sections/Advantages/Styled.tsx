import {styled, Box, Typography, Theme} from '@mui/material';

interface StyledAdvantageBlockProps {
    isImageOnLeft: boolean;
}

interface StyledImageBlockProps {
    picture: string;
    isImageOnLeft: boolean;
}

export const StyledAdvantagesSection = styled(Box)(({ theme }) => ({
    minHeight: '160vh',
    marginBottom: '20vh',
    [theme.breakpoints.down('md')]: {
        minHeight: 'auto',
        marginBottom: '10vh',
    },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10vh',
    paddingTop: '5vh',
    [theme.breakpoints.down('md')]: {
        marginBottom: '5vh',
        paddingTop: '2vh',
    },
}));

export const StyledAdvantageBlock = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isImageOnLeft',
})<StyledAdvantageBlockProps>(({ theme, isImageOnLeft }) => ({
    height: '500px',
    display: 'grid',
    gridTemplateColumns: isImageOnLeft ? '2fr 1fr' : '1fr 2fr',
    gap: '10vh',
    alignItems: 'start',
    marginBottom: '10vh',
    [theme.breakpoints.down('xl')]: {
        gap: '5vh',
        marginBottom: '5vh',
    },

    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: isImageOnLeft ? '3fr 2fr' : '2fr 3fr',
        gap: '5vh',
        marginBottom: '5vh',
    },

    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '5vh',
        marginBottom: '5vh',
    },

}));

export const StyledImageBlock = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'picture' && prop !== 'isImageOnLeft',
})<StyledImageBlockProps>(({ theme, picture, isImageOnLeft }) => ({
    order: isImageOnLeft ? 1 : 2,
    height: '100%',
    backgroundImage: `url(${picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '32px',
    [theme.breakpoints.down('sm')]: {
        order: 1,
        height: '300px',
        width: '100%',
    },
}));

interface IStyledTextContainer {
    theme?: Theme,
    isImageOnLeft:boolean,
}
export const StyledTextContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isImageOnLeft'
})<IStyledTextContainer>(({ theme, isImageOnLeft }) => ({
    order: isImageOnLeft ? 2 : 1,
    [theme!.breakpoints.down('sm')]: {
        order: 2,
    },
}));

export const StyledBlockTitle = styled(Typography)({
    marginBottom: '20px',
});

export const StyledBlockDescription = styled(Typography)(({ theme } : {theme: Theme}) => ({
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
    },
}));