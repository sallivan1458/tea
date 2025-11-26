// hooks/useGsapSmoother.ts
import { useEffect, useRef, RefObject } from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface UseGsapSmootherProps {
    isContentReady: boolean;
    wrapperRef: RefObject<HTMLDivElement>;
    contentRef: RefObject<HTMLDivElement>;
    smooth?: number;
    effects?: boolean;
    normalizeScroll?: boolean;
    ignoreMobileResize?: boolean;
}

export const useGsapSmoother = ({
                                    isContentReady,
                                    wrapperRef,
                                    contentRef,
                                    smooth = 1.5,
                                    effects = true,
                                    normalizeScroll = false,
                                    ignoreMobileResize = true,
                                }: UseGsapSmootherProps) => {
    const smootherInstance = useRef<ScrollSmoother | null>(null);

    useEffect(() => {
        if (isContentReady && wrapperRef.current && contentRef.current) {
            if (smootherInstance.current) {
                smootherInstance.current.kill();
            }
            smootherInstance.current = ScrollSmoother.create({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                smooth,
                effects,
                normalizeScroll,
                ignoreMobileResize,
            });

            ScrollTrigger.refresh();
        }

        return () => {
            if (smootherInstance.current) {
                smootherInstance.current.kill();
            }
        };
    }, [
        isContentReady,
        wrapperRef,
        contentRef,
        smooth,
        effects,
        normalizeScroll,
        ignoreMobileResize,
    ]);

    return smootherInstance.current;
};