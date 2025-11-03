import { useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";

const StyledCircle = styled(Box)(() => ({
    position: 'fixed',
    mixBlendMode:'screen',
    top: 0,
    left: 0,
    width: '90%',
    height: '80%',
    borderRadius: '50%',
    zIndex: 0,
    background: `radial-gradient(rgba(25, 118, 208, 0.12) 0%, transparent 50%) no-repeat`,
    transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
    pointerEvents: 'none',
}));

const CursorFollower = () => {
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const circle = circleRef.current;
        if (!circle) return;

        const handleMouseMove = (e: MouseEvent) => {
            circle.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <StyledCircle ref={circleRef} />;
};

export default CursorFollower;
