import {styled} from "@mui/material/styles";
import {Avatar, Box, Typography} from "@mui/material";

export const StyledCard = styled(Box)(({theme}) => ({
    width: '100%',
    height: '100%',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.05)',
    position: 'relative',
}));

export const ReviewHeader = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
    width: '100%',
}));

export const ReviewInfo = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
}));

export const ReviewContent = styled(Box)(({theme}) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: theme.spacing(2, 0),
}));

export const ReviewText = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
    margin: '0 auto',
    textAlign: 'justify',
}));

export const ReviewAvatar = styled(Avatar)(({theme}) => ({
    width: 140,
    height: 140,
    border: `2px solid ${theme.palette.primary.main}`,
    marginLeft: 'auto',
    [theme.breakpoints.down('xl')]: {
        width: 120,
        height: 120,
    },
    [theme.breakpoints.down('md')]: {
        width: 100,
        height: 100,
    },
    [theme.breakpoints.down('sm')]: {
        width: 80,
        height: 80,
    },
}));

export const DateContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
}));