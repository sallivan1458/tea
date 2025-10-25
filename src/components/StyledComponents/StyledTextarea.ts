import {CSSProperties, styled} from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    backgroundColor: theme.palette.inputBackground.main,
    color: theme.palette.text.primary,
    width: '100%',
    padding: '16.5px 14px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
    '&:hover': {
        borderColor: theme.palette.text.primary,
    },
    '&:focus': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
        outline: 'none',
    },
    minHeight: '100px',
    maxHeight: '220px',
    resize: 'vertical',
    overflowY: `auto !important` as CSSProperties['overflowY'],
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize * 1.2,
}));