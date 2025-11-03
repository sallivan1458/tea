import {
    configureStore,
} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import modalWindowReducer from "./ModalWindows.ts";
import themeReducer from './ThemeSlice';
import deviceStateReducer from './DeviceStateSlice.ts';
import gsapReducer from './gsapSlice';
import drawerReducer from './drawerSlice.ts';



export const store = configureStore({
    reducer: {
        modalWindowSlice: modalWindowReducer,
        theme: themeReducer,
        device: deviceStateReducer,
        gsapState: gsapReducer,
        drawer: drawerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()