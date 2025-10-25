import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const EmblaContainer = styled(Box)(() => ({
    width: '100%',
    margin: 'auto',
    '--slide-height': '500px',
    '--slide-spacing': '1rem',
    '--slide-size': '100%',
}));

export const EmblaViewport = styled(Box)({
    overflow: 'hidden',
    width: '100%',
});

export const EmblaContainerInner = styled(Box)({
    display: 'flex',
    touchAction: 'none',
    marginLeft: 'calc(var(--slide-spacing) * -1)',
    width: '100%',
});

export const EmblaSlide = styled(Box)({
    transform: 'translate3d(0, 0, 0)',
    flex: '0 0 var(--slide-size)',
    minWidth: 0,
    paddingLeft: 'var(--slide-spacing)',
    width: '100%',
});

export const EmblaSlideContent = styled(Box)(() => ({
    boxShadow: 'inset 0 0 6px 1px rgba(255,255,255, 0.2)',
    borderRadius: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--slide-height)',
    width: '100%',
    boxSizing:'border-box',
    overflow:'hidden',
}));



export const EmblaControls = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    justifyContent: 'space-between',
    gap: '1.2rem',
    marginTop: '1.8rem',
    width: '100%',
});

export const EmblaButtons = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.6rem',
    alignItems: 'center',
});

export const EmblaButton = styled('button')(({ theme }) => ({
    WebkitTapHighlightColor: `rgba(${theme.palette.text.primary}, 0.5)`,
    WebkitAppearance: 'none',
    appearance: 'none',
    backgroundColor: 'transparent',
    touchAction: 'manipulation',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 0,
    padding: 0,
    margin: 0,
    boxShadow: `inset 0 0 0 0.2rem ${theme.palette.grey[400]}`,
    width: '3.6rem',
    height: '3.6rem',
    zIndex: 1,
    borderRadius: '50%',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:disabled': {
        color: theme.palette.grey[600],
    },
}));

export const EmblaButtonSvg = styled('svg')({
    width: '35%',
    height: '35%',
});