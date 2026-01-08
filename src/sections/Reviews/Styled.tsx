import { styled, Box, Typography } from '@mui/material';

export const StyledReviewsSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    // minHeight: 'calc(var(--vh, 1vh) * 90)',
    padding: `${theme.spacing(8)} 0 ${theme.spacing(10)}`,
    paddingBottom: 'calc(var(--vh, 1vh) * 10)',
    marginBottom:'150px',
    willChange: 'transform',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'auto',
}));

export const StyledReviewTitle = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    willChange: 'opacity, transform',
    marginBottom: 'calc(var(--vh, 1vh) * 4)',
    textAlign: 'center'
});

export const StyledReviewsSlider = styled(Box)({
    width: '100%',
    minHeight: 'auto',
});