// app/components/Styled.tsx

import { styled, AppBar, Box, Toolbar, Button, IconButton, Menu, alpha } from '@mui/material';

// Стили для AppBar
export const StyledAppBar = styled(AppBar)({
    backdropFilter: 'none !important',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginTop: '20px',
    left: 0,
    right: 0,
    background: 'none',
});

// Стили для контейнера, который оборачивает тулбар
export const StyledBoxContainer = styled(Box)(({ theme }) => ({
    maxWidth: 'lg',
    margin: '0 auto',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('md')]: {
        // marginLeft: 'auto',
        marginRight: 0,
    },
}));

// Стили для тулбара с эффектом размытия
export const StyledToolbarWrapper = styled(Box)(({ theme }) => ({
    borderRadius: `16px`,
    border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
    backdropFilter: 'blur(20px)',
    boxShadow: `0 4px 20px ${alpha(
        theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.grey[400],
        0.2
    )}`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
}));

// Стили для тулбара внутри обертки
export const StyledToolbar = styled(Toolbar)({
    minHeight: '48px !important',
    paddingLeft: '16px !important',
    paddingRight: '16px !important',
    alignItems: 'center',
});

// Стили для кнопок навигации
export const StyledNavButton = styled(Button)(({ theme }) => ({
    textAlign: 'center',
    height: '40px',
    minWidth: 'auto',
    padding: theme.spacing(0, 2),
    borderRadius: theme.shape.borderRadius,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '14px',
    letterSpacing: '0.8px !important',
}));

// Стили для IconButton
export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    width: 40,
    height: 40,
    borderRadius: theme.shape.borderRadius,
}));

// Стили для Menu
export const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        pointerEvents: 'auto',
        '&:focus': {
            outline: 'none',
        },
    },
});

