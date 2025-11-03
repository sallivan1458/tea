import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppSelector } from "./store/store.ts";
import { alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        inputBackground: Palette['primary'];
    }
    interface PaletteOptions {
        inputBackground?: PaletteOptions['primary'];
    }
}

interface ThemeProviderWrapperProps {
    children: ReactNode;
}

export const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
    const mode = useAppSelector(state => state.theme.mode);

    const theme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontSize: 14,
                    h1: {
                        fontWeight: 800,
                        fontSize: '4rem', // базовый размер для больших экранов
                        letterSpacing: '0.15rem',
                        '@media (max-width:900px)': { // для планшетов
                            fontSize: '3rem',
                        },
                        '@media (max-width:600px)': { // для мобильных
                            fontSize: '2.5rem',
                            letterSpacing: '0.05rem',
                        },
                    },
                    h2: {
                        fontWeight: 700,
                        fontSize: '3rem',
                        letterSpacing: '0.13em',
                        '@media (max-width:900px)': {
                            fontSize: '2.5rem',
                        },
                        '@media (max-width:600px)': {
                            fontSize: '2rem',
                        },
                    },
                    h3: {
                        fontWeight: 600,
                        fontSize: '2.8rem',
                        letterSpacing: '0.09em',
                        '@media (max-width:900px)': {
                            fontSize: '2.3rem',
                        },
                        '@media (max-width:600px)': {
                            fontSize: '1.9rem',
                        },
                    },
                    h4: {
                        fontWeight: 600,
                        fontSize: '2.6rem',
                        letterSpacing: '0.07em',
                        '@media (max-width:900px)': {
                            fontSize: '2.2rem',
                        },
                        '@media (max-width:600px)': {
                            fontSize: '1.8rem',
                        },
                    },
                    h5: {
                        fontWeight: 500,
                        fontSize: '2rem',
                        letterSpacing: '0.06em',
                        '@media (max-width:900px)': {
                            fontSize: '1.7rem',
                        },
                        '@media (max-width:600px)': {
                            fontSize: '1.4rem',
                        },
                    },
                    h6: {
                        fontWeight: 450,
                        fontSize: '1.7rem',
                        letterSpacing: '0.05em',
                        '@media (max-width:900px)': {
                            fontSize: '1.4rem',
                        },
                        '@media (max-width:600px)': {
                            fontSize: '1.1rem',
                        },
                    },
                    body1: {
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        letterSpacing: '0.04em',
                        '@media (max-width:900px)': {
                            fontSize: '1.2rem',
                        },
                        '@media (max-width:600px)': {
                            fontSize: '0.8rem',
                        },
                    },
                    body2: {
                        fontWeight: 400,
                        fontSize: '1rem',
                        letterSpacing: '0.04em',
                        '@media (max-width:900px)': {
                            fontSize: '0.9rem',
                        },
                        '@media (max-width:600px)': {
                            fontSize: '0.8rem',
                        },
                    },
                },
                palette: {
                    mode,
                    primary: {
                        main: mode === 'light' ? '#1976d2' : '#90caf9',
                    },
                    secondary: {
                        main: mode === 'light' ? '#9c27b0' : '#ce93d8',
                    },
                    background: {
                        default: mode === 'light' ? '#f5f5f5' : '#121212',
                        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
                    },
                    text: {
                        primary: mode === 'light' ? '#121212' : '#f5f5f5',
                    },
                    inputBackground: {
                        main: mode === 'light' ? '#f5f5f5' : alpha('#1e1e1e', 0.8)
                    },
                },
                components: {
                    MuiPaper: {
                        styleOverrides: {
                            root: ({ theme }) => ({
                                backdropFilter: 'blur(10px)',
                                backgroundColor: alpha(
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.grey[900]
                                        : theme.palette.common.white,
                                    theme.palette.mode === 'dark'
                                        ? 0.4
                                        : 0.8
                                ),
                                backgroundImage: 'none',
                            }),
                        },
                    },
                    MuiTypography: {
                        // styleOverrides: {
                        //     h1: () => ({
                        //         fontWeight: 700,
                        //         letterSpacing: '0.1em',
                        //     }),
                        //     h2: () => ({
                        //         fontWeight: 600,
                        //         letterSpacing: '0.13em',
                        //     }),
                        //     h3: () => ({
                        //         fontWeight: 550,
                        //         letterSpacing: '0.09em',
                        //     }),
                        //     h4: () => ({
                        //         fontWeight: 500,
                        //         letterSpacing: '0.06em',
                        //     }),
                        //     h5: () => ({
                        //         letterSpacing: '0.06em',
                        //     }),
                        //     h6: () => ({
                        //         letterSpacing: '0.06em',
                        //     }),
                        // },
                    },
                    MuiTextField: {
                        styleOverrides: {
                            root: ({ theme }) => ({
                                backgroundColor: theme.palette.inputBackground.main,
                            }),
                        },
                    },
                    MuiOutlinedInput: {
                        styleOverrides: {
                            root: ({ theme }) => ({
                                backgroundColor: theme.palette.inputBackground.main,
                            }),
                        },
                    },
                },
            }),
        [mode]
    );

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};