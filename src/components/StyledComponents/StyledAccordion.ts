import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import { alpha } from '@mui/material/styles';

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    borderRadius: '16px !important',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
    '&:before':{
      display:'none'
    },
    '&.Mui-expanded': {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '16px',
        boxShadow: `0px 2px 12px ${alpha(theme.palette.primary.main, 0.5)}`,
    },
    '&:hover': {
        borderRadius: '16px',
        boxShadow: `0px 0px 12px ${alpha(theme.palette.primary.main, 0.5)}`,
    },
}));