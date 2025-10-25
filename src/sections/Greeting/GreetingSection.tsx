import {useRef} from 'react';
import tieferliedIMG from '../../assets/StartLogo.jpg'
import {
    StyledGreetingSection,
    StyledTieferliedIMG,
    StyledContentBox,
    StyledTypography,
    StyledAdditionalBox
} from './Styled';
import {useMediaQuery, useTheme} from "@mui/material";

interface IGreetingSectionProps {
    id: string
}

const GreetingSection = ({id}: IGreetingSectionProps) => {
    const greetingSection = useRef(null)
    const headingRef = useRef(null);
    const tieferliedRef = useRef(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <StyledGreetingSection
                id={id}
                ref={greetingSection}>
                {/* Фоновое изображение */}
                <StyledTieferliedIMG
                    ref={tieferliedRef}
                    src={tieferliedIMG}
                />

                {/* Контент поверх фона */}
                <StyledContentBox>
                    <StyledTypography
                        data-speed="1.3"
                        ref={headingRef}
                        variant="h1"
                    >
                        {!isMobile
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