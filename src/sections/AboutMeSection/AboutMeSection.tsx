import { useRef } from 'react';
import { useTheme, useMediaQuery, Typography, Box } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import AboutMePhoto from '../../assets/sticker.webp';
import {useAppSelector} from "../../store/store.ts";
import {
    AboutMeContainer,
    AboutMeTitle,
    TextContent,
    ContentWrapper,
    ScrollableContent,
    InfoBlock,
    PhotoContainer,
    Photo,
} from "./Styled.tsx";

interface AboutMeSectionProps {
    id: string;
}



const AboutMeSection = ({ id }: AboutMeSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLImageElement>(null);
    const photoRef = useRef<HTMLImageElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const infoBlocksRef = useRef<HTMLDivElement[]>([]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isTouchDevice = useAppSelector(state => state.device.deviceType === 'touchDevice');

    useGSAP(() => {
        gsap.fromTo(titleRef.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '-20% center',
                end: '-5% center',
                scrub: !isTouchDevice,
            }
        });

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: sectionRef.current,
        //         start: 'top 80%',
        //         end: 'top 50%',
        //         toggleActions: 'play none none reverse',
        //         scrub: !isTouchDevice,
        //     }
        // });

        // Анимация фото
        // tl.fromTo(photoRef.current, {
        //     opacity: 0,
        //     scale: 0.8,
        //     rotationY: -30,
        // }, {
        //     opacity: 1,
        //     scale: 1,
        //     rotationY: 0,
        //     duration: 1,
        //     ease: 'power3.out'
        // });
        gsap.fromTo(photoRef.current, {
            opacity: 0,
            scale: 0.85,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '-10% center',
                end: '5% center',
                scrub: !isTouchDevice,
            }
        });


        // Анимация имени
        // tl.fromTo(nameRef.current, {
        //     opacity: 0,
        //     y: 30,
        // }, {
        //     opacity: 1,
        //     y: 0,
        //     duration: 0.8,
        //     ease: 'power2.out'
        // }, '-=0.5');

        gsap.fromTo(nameRef.current, {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '-10% center',
                end: '5% center',
                scrub: !isTouchDevice,
            }
        });

        // Анимация описания
        // tl.fromTo(descriptionRef.current, {
        //     opacity: 0,
        //     y: 20,
        // }, {
        //     opacity: 1,
        //     y: 0,
        //     duration: 0.7,
        //     ease: 'power2.out'
        // }, '-=0.3');

        gsap.fromTo(descriptionRef.current, {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '-10% center',
                end: '5% center',
                scrub: !isTouchDevice,
            }
        });

        // Анимация блоков информации
        infoBlocksRef.current.forEach((block, index) => {
            if (block) {
                gsap.fromTo(block, {
                    opacity: 0,
                    y: isMobile ? 20 : 30,
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: `${(index + 1) * 10}% center`,
                        end: `${10 + (index + 1) * 10}% center`,
                        scrub: !isTouchDevice,
                    }
                });
            }
        });

    }, { scope: sectionRef, dependencies: [isMobile] });

    // Данные для блоков информации
    const infoBlocks = [
        {
            title: 'Опыт работы',
            content: '5+ лет преподавания английского языка студентам разных уровней и возрастов'
        },
        {
            title: 'Специализация',
            content: 'Разговорный английский, бизнес-английский, подготовка к экзаменам'
        },
        {
            title: 'Образование',
            content: 'Закончил ФРГФ и учился по программе обмена в Китайском университете'
        }
    ];

    const addToInfoBlocksRef = (el: HTMLDivElement | null) => {
        if (el && !infoBlocksRef.current.includes(el)) {
            infoBlocksRef.current.push(el);
        }
    };

    return (
        <AboutMeContainer
            id={id}
            ref={sectionRef}
        >
            <AboutMeTitle
                variant="h1"
                ref={titleRef}
            >
                My education
            </AboutMeTitle>
            <ContentWrapper>
                <TextContent>
                    <Typography
                        ref={nameRef}
                        variant={isSmallMobile ? "h4" : "h3"}
                        sx={{
                            fontWeight: 'bold',
                            color: 'primary.main',
                            mb: 1,
                            opacity: '0',
                        }}
                    >
                        Сергей Михайлович
                    </Typography>

                    <Typography
                        ref={descriptionRef}
                        variant={isSmallMobile ? "body2" : "body1"}
                        sx={{
                            color: 'text.primary',
                            mb: 3,
                            maxWidth: '500px',
                            lineHeight: 1.6,
                            opacity: '0',
                        }}
                    >
                        Профессиональный репетитор английского языка который сможет обучить тебя английскому языку
                    </Typography>

                    {/* Блоки информации с скроллом */}
                    <ScrollableContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {infoBlocks.map((block, index) => (
                                <InfoBlock
                                    key={index}
                                    ref={addToInfoBlocksRef}
                                >
                                    <Typography
                                        variant={isSmallMobile ? "subtitle1" : "h6"}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'primary.main',
                                            mb: 1
                                        }}
                                    >
                                        {block.title}
                                    </Typography>
                                    <Typography
                                        variant={isSmallMobile ? "body2" : "body1"}
                                        sx={{
                                            color: 'text.primary',
                                            lineHeight: 1.5
                                        }}
                                    >
                                        {block.content}
                                    </Typography>
                                </InfoBlock>
                            ))}
                        </Box>
                    </ScrollableContent>
                </TextContent>

                {/* Фото */}
                <PhotoContainer>
                    <Photo
                        ref={photoRef}
                        src={AboutMePhoto}
                        alt="Мария Иванова - репетитор английского языка"
                    />
                </PhotoContainer>
            </ContentWrapper>
        </AboutMeContainer>
    );
};

export default AboutMeSection;