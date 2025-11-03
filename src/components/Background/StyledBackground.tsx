import { Box, styled, keyframes } from "@mui/material";

const moveCircles = keyframes`
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

interface AnimatedCircleProps {
    size: string;
    color: string;
    duration: number;
    positionX: number;
    positionY: number;
}

const AnimatedCircle = styled(Box, {
    shouldForwardProp: (prop) =>
        prop !== 'size' &&
        prop !== 'color' &&
        prop !== 'duration' &&
        prop !== 'positionX' &&
        prop !== 'positionY'
})<AnimatedCircleProps>(({ size, color, duration, positionX, positionY }) => ({
    position: 'absolute',
    width: size,
    height: size,
    borderRadius: '50%',
    background: `radial-gradient(${color} 0%, transparent 50%) no-repeat`,
    mixBlendMode: 'screen',
    animation: `${moveCircles} ${duration}s ease-in-out infinite`,
    top: `calc(${positionX}% - ${size} / 2)`,
    left: `calc(${positionY}% - ${size} / 2)`,
    transformOrigin: 'center center',
}));

export const AnimatedBackground = styled(Box)(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #070310 0%, #150a30 50%, #090515 100%)',
    zIndex: -1,
    overflow: 'hidden',
}));

// Главный компонент, который будет экспортироваться
const BackgroundWithCircles = () => (
    <AnimatedBackground>
        {/*<AnimatedCircle size="0%" positionX={100} positionY={100} color="rgba(230, 152, 61, 0.8)" duration={40}/>*/}
        <AnimatedCircle size="250%" positionX={0} positionY={0} color="rgba(100, 100, 255, 0.15)" duration={35} />
        <AnimatedCircle size="80%" positionX={80} positionY={20} color="rgba(200, 255, 150, 0.05)" duration={45} />
        <AnimatedCircle size="285%" positionX={100} positionY={100} color="rgba(255, 150, 200, 0.15)" duration={30}  />
    </AnimatedBackground>
);

export default BackgroundWithCircles;