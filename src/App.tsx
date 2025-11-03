import {Route, Routes} from "react-router-dom";

// import RequireAuth from "./hoc/RequireAuth.tsx";
import Layout from "components/Layout.tsx";
import {useAppDispatch, useAppSelector} from "./store/store.ts";
import {lazy, Suspense, useEffect} from "react";
import ModalErrorWindow from "components/ModalErrorWindow/ModalErrorWindow.tsx";
import {gsap} from 'gsap'
import {setDeviceType} from "./store/DeviceStateSlice.ts";
import {useMediaQuery} from "@mui/material";


const HomePage = lazy(() => import('pages/HomePage/HomePage.tsx'));


function App() {

    const dispatch = useAppDispatch();
    const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');

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

    const isErrorWindow = useAppSelector(state => state.modalWindowSlice.isErrorOpen)


    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'/'} element={
                        <Suspense fallback={<h1></h1>}>
                            <HomePage/>
                        </Suspense>
                    }/>


                    <Route path={'*'} element={<>not found page</>}/>
                </Route>
            </Routes>
            {isErrorWindow && <ModalErrorWindow/>}
        </>
    )
}

export default App
