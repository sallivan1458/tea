// Создайте отдельный компонент для фильтра
export const GlassFilterSVG = () => (
    <svg style={{display: 'none'}}>
        <filter id="glass-distortion">
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.0001"
                numOctaves="5"
                seed="3"
                result="turbulence"
            />
            <feGaussianBlur
                in="turbulence"
                stdDeviation="4"
                result="softMap"
            />
            <feDisplacementMap
                in="SourceGraphic"
                in2="softMap"
                scale="140"
                // xChannelSelector={"R"}
                // yChannelSelector={"G"}
            />
        </filter>
    </svg>
);


// <feTurbulence
//     type="fractalNoise"
//     baseFrequency="0.0002 0.0002"
//     numOctaves="5"
//     seed="3"
//     result="turbulence"
// />
// <feGaussianBlur
//     in="turbulence"
//     stdDeviation="4"
//     result="softMap"
// />
// <feDisplacementMap
//     in="SourceGraphic"
//     in2="softMap"
//     scale="140"
//     xChannelSelector={"R"}
//     yChannelSelector={"G"}
// />