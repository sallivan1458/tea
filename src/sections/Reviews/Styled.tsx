import { styled, Box, Typography } from '@mui/material';

export const StyledReviewsSection = styled(Box)({
    position: 'relative',
    height: '90vh',
    paddingBottom: '10vh',
    marginBottom:'150px',
    willChange: 'transform',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const StyledReviewTitle = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    willChange: 'opacity, transform',
    marginBottom: '4vh',
    textAlign: 'center'
});

export const StyledReviewsSlider = styled(Box)({
    width: '100%',
    height: '100%',
});