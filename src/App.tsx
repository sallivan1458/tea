import {Route, Routes} from "react-router-dom";

// import RequireAuth from "./hoc/RequireAuth.tsx";
import Layout from "components/Layout.tsx";
import { useAppSelector} from "./store/store.ts";
import {lazy, Suspense, useEffect} from "react";
import ModalErrorWindow from "components/ModalErrorWindow/ModalErrorWindow.tsx";
import { CircularProgress} from "@mui/material";
import {gsap} from 'gsap'


const HomePage = lazy(() => import('pages/HomePage/HomePage.tsx'));


function App() {

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
                <Route path={'/'} element={<Layout/>} >

                    <Route path={'/'} element={
                        <Suspense fallback={<CircularProgress/>}>
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
