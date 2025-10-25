import {useRef, useCallback} from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {useTheme, useMediaQuery} from '@mui/material';

import BGU_uunit from '../../assets/BGU_uunit.jpg'
import China_University from '../../assets/China_University.jpg'
import School39 from '../../assets/School39.jpg'
import {CardEducation, CardEducationProps} from "components/CardEducation.tsx";
import {
    EducationContainer,
    EducationTitle,
    EducationContent,
    EducationBlock
} from './Styled';

interface IEducationSectionProps {
    id:string
}

const EducationSection = ({id}:IEducationSectionProps) => {
    const educationSection = useRef(null)
    const educationTitle = useRef(null)
    const educationBlocks = [
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const pictures:CardEducationProps[] = [
        {image: School39, text: 'Гимназия с языковым уклоном', title:'Гимназия 39'},
        {image: BGU_uunit, text: 'Получил высшее филологическое образование', title:'БГУ'},
        {image: China_University, text: 'Также владею и Китайским языком на уровне Escape 4', title:'Ningxia University'}
    ]

    const getAnimationDirection = useCallback((index: number) => {
        if (!isMobile) return -100; // На десктопе все блоки движутся одинаково

        // На мобильных: первые два блока влево, третий блок вправо
        return index === 2 ? 100 : -100;
    }, [isMobile]);

    useGSAP(() => {
        gsap.fromTo(educationTitle.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: educationSection.current,
                start: '-20% center',
                end: '-5% center',
                scrub: true,
            }
        });



        // Анимация исчезновения блоков
        educationBlocks.forEach((block, index) => {
            const direction = getAnimationDirection(index);

            gsap.fromTo(block.current, {
                opacity: 1,
                x: 0
            }, {
                opacity: 0,
                x: -direction,
                scrollTrigger: {
                    trigger: educationSection.current,
                    start: `center ${10 + index * 6}%`,
                    end: `center ${-10 + index * 5}%`,
                    scrub: true,
                }
            });
        });

        // Анимация появления блоков
        educationBlocks.forEach((block, index) => {
            const direction = getAnimationDirection(index);

            gsap.fromTo(block.current, {
                opacity: 0,
                x: direction
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: educationSection.current,
                    start: `-${20 + index * 6}% center`,
                    end: `-${5 + index * 5}% center`,
                    scrub: true,
                }
            });
        });

    }, {scope: educationSection, dependencies: [isMobile]});

    return (
        <EducationContainer
            id={id}
            ref={educationSection}
        >
            <EducationTitle
                variant="h1"
                ref={educationTitle}
            >
                My education
            </EducationTitle>

            <EducationContent>
                {pictures.map((picture, index) => (
                    <EducationBlock
                        key={index}
                        ref={educationBlocks[index]}
                    >
                        <CardEducation
                            image={picture.image}
                            title={picture.title}
                            text={picture.text}
                        />
                    </EducationBlock>
                ))}
            </EducationContent>
        </EducationContainer>
    );
};

export default EducationSection;