import {useRef} from 'react';
import tieferliedWEBP from '../../assets/greetingLogo.webp'
import {
    StyledGreetingSection,
    StyledContentBox,
    StyledTypography,
    StyledAdditionalBox, StyledBackgroundImage
} from './Styled';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useAppSelector} from "../../store/store.ts";

interface IGreetingSectionProps {
    id: string
}

const GreetingSection = ({id}: IGreetingSectionProps) => {
    const greetingSection = useRef(null)
    const headingRef = useRef(null);

    const isTouchDevice = useAppSelector(state => state.device.deviceType === 'touchDevice')


    useGSAP(() => {
        if (!isTouchDevice) {
            return
        }

        gsap.fromTo(headingRef.current, {
            y: -80,
            opacity: 1
        }, {
            y: -280,
            opacity: 0,
            scrollTrigger: {
                trigger: greetingSection.current,
                start: '0% 0%',
                end: 'bottom 20%',
                scrub: true,
            }
        });
    }, { dependencies: [isTouchDevice]});


    return (
        <>
            <StyledGreetingSection
                id={id}
                ref={greetingSection}>
                {/* Фоновое изображение */}
                <StyledBackgroundImage
                    style={{
                        backgroundImage: `url(${tieferliedWEBP})`
                    }}
                />

                {/* Контент поверх фона */}
                <StyledContentBox>
                    <StyledTypography
                        data-speed="1.3"
                        ref={headingRef}
                        variant="h1"
                    >
                        <span>TIEFERLIED</span>
                        <span>ENGLISH ACADEMY</span>

                    </StyledTypography>
                </StyledContentBox>
            </StyledGreetingSection>
            <StyledAdditionalBox></StyledAdditionalBox>
        </>

    );
};

export default GreetingSection;