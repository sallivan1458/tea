import {styled, Box, Typography, Theme} from '@mui/material';

interface StyledAdvantageBlockProps {
    isImageOnLeft: boolean;
}

interface StyledImageBlockProps {
    picture: string;
    isImageOnLeft: boolean;
}

export const StyledAdvantagesSection = styled(Box)(({ theme }) => ({
    minHeight: '160lvh',
    marginBottom: '20lvh',
    [theme.breakpoints.down('md')]: {
        minHeight: 'auto',
        marginBottom: '10lvh',
    },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10lvh',
    paddingTop: '5lvh',
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
    gap: '10lvh',
    alignItems: 'start',
    marginBottom: '10lvh',
    [theme.breakpoints.down('xl')]: {
        gap: '5lvh',
        marginBottom: '5lvh',
    },

    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: isImageOnLeft ? '3fr 2fr' : '2fr 3fr',
        gap: '5lvh',
        marginBottom: '5lvh',
    },

    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '5lvh',
        marginBottom: '5lvh',
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


    fontWeight: 200,
    fontSize: '1.7rem',
    letterSpacing: '0.06em',
    '@media (max-width:900px)': {
        fontSize: '1.5rem',
    },
    '@media (max-width:600px)': {
        fontSize: '1.3rem',
    },
}));