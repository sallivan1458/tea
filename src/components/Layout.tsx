import NavigateSection from "components/NavigateSection/NavigateSection.tsx";
import {Outlet} from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from "react";
import {useAppSelector} from "../store/store.ts";
import {gsap} from 'gsap'
import CursorFollower from "components/Background/CursorFollower.tsx";
import TopDrawer from "components/Drawer/Drawer.tsx";
import {useGsapSmoother} from "../hooks/useGsapSmoother";
import BackgroundWithCircles, {AnimatedBackground} from "components/Background/StyledBackground.tsx";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Layout = () => {
    const smootherWrapperRef = useRef<HTMLDivElement>(null);
    const smootherContentRef = useRef<HTMLDivElement>(null);
    const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');

    const isContentReady = useAppSelector(state => state.gsapState.isContentReady);

    useGsapSmoother({
        isContentReady: isContentReady && !isTouchDevice,
        wrapperRef: smootherWrapperRef,
        contentRef: smootherContentRef,
    });

    const mainContent = (
        <Outlet/>
    );

    return (
        <>
            {!isTouchDevice
                ? <BackgroundWithCircles/>
                : <AnimatedBackground/>}
            {!isTouchDevice && <CursorFollower/>}
            <TopDrawer/>
            <NavigateSection/>

            {!isTouchDevice ? (
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