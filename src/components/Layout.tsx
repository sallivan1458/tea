import NavigateSection from "components/NavigateSection/NavigateSection.tsx";
import {Outlet} from "react-router-dom";
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from "react";
import {useAppSelector} from "../store/store.ts";
import {gsap} from 'gsap'
import CursorFollower from "components/Background/CursorFollower.tsx";
import TopDrawer from "components/Drawer/Drawer.tsx";
import {useGsapSmoother} from "../hooks/useGsapSmoother";
import BackgroundWithCircles, {AnimatedBackground} from "components/Background/StyledBackground.tsx";
import {Box} from "@mui/material";
import {GlassFilterSVG} from "components/GlassFilter/GlassFilter.tsx";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Layout = () => {
    const smootherWrapperRef = useRef<HTMLDivElement>(null);
    const smootherContentRef = useRef<HTMLDivElement>(null);
    const isTouchDevice = useAppSelector(state => state.device.deviceType === 'touchDevice');

    const isContentReady = useAppSelector(state => state.gsapState.isContentReady);

    useGsapSmoother({
        isContentReady: isContentReady && !isTouchDevice,
        wrapperRef: smootherWrapperRef,
        contentRef: smootherContentRef,
    });


    return (
        <Box
            sx={{
                overflowX: isTouchDevice ? 'hidden' : 'visible',
            }}
        >
            <GlassFilterSVG/>
            {!isTouchDevice
                ? <BackgroundWithCircles/>
                : <AnimatedBackground/>}
            {!isTouchDevice && <CursorFollower/>}
            <TopDrawer/>
            <NavigateSection/>

            {!isTouchDevice ? (
                <div id="smooth-wrapper" ref={smootherWrapperRef}>
                    <div id="smooth-content" ref={smootherContentRef}>
                        <Outlet/>
                    </div>
                </div>
            ) : (
                <Outlet/>
            )}
        </Box>
    );
};

export default Layout;