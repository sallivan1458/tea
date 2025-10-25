import { createSlice } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
    mode: ThemeMode;
}

const initialState: ThemeState = {
    mode: 'dark',
};

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;