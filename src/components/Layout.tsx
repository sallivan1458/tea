import NavigateSection from "components/NavigateSection/NavigateSection.tsx";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import AnimatedBackground from "components/Background/StyledBackground.tsx";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";
import { useAppSelector } from "../store/store.ts";
import { gsap } from 'gsap'
import CursorFollower from "components/Background/CursorFollower.tsx";
import TopDrawer from "components/Drawer/Drawer.tsx";
import { useGsapSmoother } from "../hooks/useGsapSmoother"; // Импорт нашего хука

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Layout = () => {
    const smootherWrapperRef = useRef<HTMLDivElement>(null);
    const smootherContentRef = useRef<HTMLDivElement>(null);

    const isContentReady = useAppSelector(state => state.gsapState.isContentReady);

    useGsapSmoother({
        isContentReady,
        wrapperRef: smootherWrapperRef,
        contentRef: smootherContentRef,
    });

    return (
        <>
            <AnimatedBackground/>
            <CursorFollower/>
            <TopDrawer/>
            <NavigateSection/>

            <div id="smooth-wrapper" ref={smootherWrapperRef}>
                <div id="smooth-content" ref={smootherContentRef}>
                    <Container
                        component="main"
                        maxWidth="lg"
                        sx={{
                            position: 'relative',
                        }}
                    >
                        <Outlet/>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Layout;