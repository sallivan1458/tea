import { useRef} from 'react';
import tieferliedIMG from '../../assets/StartLogo.webp'
import {
    StyledGreetingSection,
    StyledContentBox,
    StyledTypography,
    StyledAdditionalBox, StyledBackgroundImage
} from './Styled';
import {useMediaQuery, useTheme} from "@mui/material";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useAppSelector} from "../../store/store.ts";

interface IGreetingSectionProps {
    id: string
}

const GreetingSection = ({id}: IGreetingSectionProps) => {
    const greetingSection = useRef(null)
    const headingRef = useRef(null);

    const theme = useTheme();
    const isWidthMin600 = useMediaQuery(theme.breakpoints.down('sm'));
    const isTouchDevice = useAppSelector(state => state.device.deviceType === 'touchDevice')


    useGSAP(() => {
        if (!isTouchDevice) {return}

        gsap.fromTo(headingRef.current, {
            y: -80,
            opacity: 1
        }, {
            y: -300,
            opacity: 0,
            scrollTrigger: {
                trigger: greetingSection.current,
                start: '0% 0%',
                end: 'bottom top',
                scrub: true,
            }
        });
    }, { scope: greetingSection, dependencies: [isTouchDevice]  });



    return (
        <>
            <StyledGreetingSection
                id={id}
                ref={greetingSection}>
                {/* Фоновое изображение */}
                <StyledBackgroundImage
                    style={{
                        backgroundImage: `url(${tieferliedIMG})`
                    }}
                />

                {/* Контент поверх фона */}
                <StyledContentBox>
                    <StyledTypography
                        data-speed="1.3"
                        ref={headingRef}
                        variant="h1"
                    >
                        {!isWidthMin600
                            ? <>
                                <span>TIEFERLIED</span>
                                <span>ENGLISH ACADEMY</span>
                            </>
                            : <>
                                <span>TIEFERLIED</span>
                                <span>ENGLISH</span>
                                <span>ACADEMY</span>
                            </>
                        }

                    </StyledTypography>
                </StyledContentBox>
            </StyledGreetingSection>
            <StyledAdditionalBox></StyledAdditionalBox>
        </>

    );
};

export default GreetingSection;