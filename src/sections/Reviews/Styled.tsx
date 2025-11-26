import { styled, Box, Typography } from '@mui/material';

export const StyledReviewsSection = styled(Box)({
    position: 'relative',
    height: 'calc(var(--vh, 1vh) * 90)',
    paddingBottom: 'calc(var(--vh, 1vh) * 10)',
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
    marginBottom: 'calc(var(--vh, 1vh) * 4)',
    textAlign: 'center'
});

export const StyledReviewsSlider = styled(Box)({
    width: '100%',
    height: '100%',
});