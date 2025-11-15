// App.tsx
import {Route, Routes} from "react-router-dom";
import Layout from "components/Layout.tsx";
import {useAppDispatch, useAppSelector} from "./store/store.ts";
import {lazy, Suspense, useEffect} from "react";
import ModalErrorWindow from "components/ModalErrorWindow/ModalErrorWindow.tsx";
import {gsap} from 'gsap'
import {setDeviceType} from "./store/DeviceStateSlice.ts";
import {useMediaQuery} from "@mui/material";
import Loader from "components/Loader/Loader.tsx";

const HomePage = lazy(() => import('pages/HomePage/HomePage.tsx'));

function App() {
    const dispatch = useAppDispatch();
    const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');


    const isErrorWindow = useAppSelector(state => state.modalWindowSlice.isErrorOpen);
    const loading = useAppSelector(state => state.loading.loading);

    useEffect(() => {
        dispatch(setDeviceType(isTouchDevice ? 'touchDevice' : 'laptop'));
    }, [dispatch, isTouchDevice]);

    useEffect(() => {
        gsap.config({
            force3D: true,
            autoSleep: 60,
            nullTargetWarn: false,
        });
    }, []);




    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={
                        <Suspense>
                            <HomePage/>
                        </Suspense>
                    }/>
                    <Route path={'*'} element={<>not found page</>}/>
                </Route>
            </Routes>
            {isErrorWindow && <ModalErrorWindow/>}
            {loading !== 'success' && <Loader/>}
        </>
    );
}

export default App;