import NavigateSection from "components/NavigateSection/NavigateSection.tsx";
import { Outlet } from "react-router-dom";
import {Container, useMediaQuery} from "@mui/material";
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
    const isMobile = useMediaQuery('(max-width:900px)');

    const isContentReady = useAppSelector(state => state.gsapState.isContentReady);

    useGsapSmoother({
        isContentReady: isContentReady && !isMobile,
        wrapperRef: smootherWrapperRef,
        contentRef: smootherContentRef,
    });

    const mainContent = (
        <Outlet/>
    );

    return (
        <>
            <AnimatedBackground/>
            <CursorFollower/>
            <TopDrawer/>
            <NavigateSection/>

            {!isMobile ? (
                <div id="smooth-wrapper" ref={smootherWrapperRef}>
                    <div id="smooth-content" ref={smootherContentRef}>
                        {mainContent}
                    </div>
                </div>
            ) : (
                mainContent
            )}
        </>
    );
};

export default Layout;