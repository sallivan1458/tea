import {createSlice} from "@reduxjs/toolkit";

interface GsapState {
    isContentReady: boolean;
    activeSection: string | null;
}

const initialState: GsapState = {
    isContentReady: false,
    activeSection: null,
};

const gsapSlice = createSlice({
    name: 'gsap',
    initialState,
    reducers: {
        setContentReady: (state, action) => {
            state.isContentReady = action.payload;
        },
        setActiveSection: (state, action) => {
            state.activeSection = action.payload;
        },
    },
});

export const {
    setContentReady,
    setActiveSection,
} = gsapSlice.actions;

export default gsapSlice.reducer;
