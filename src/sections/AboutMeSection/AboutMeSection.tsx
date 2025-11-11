import { useRef } from 'react';
import { useTheme, useMediaQuery, Typography, Box, styled } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Замените на ваше реальное фото
import AboutMePhoto from '../../assets/sticker.webp';
import {useAppSelector} from "../../store/store.ts";

interface AboutMeSectionProps {
    id: string;
}

// Styled components
const AboutMeContainer = styled(Box)({
    height: '100%',
    // maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    willChange: 'transform',
    marginBottom: '20vh',
    '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform:'translateX(-50%)',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #010101 0%, transparent 100%)',
        zIndex: -1,
        pointerEvents: 'none',
    },
});

const AboutMeTitle = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    willChange: 'opacity, transform',
    marginBottom: '30px',
});

const ContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        gap: theme.spacing(3),
        textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(2),
    },
}));

const TextContent = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        maxHeight: 'none',
        gap: theme.spacing(1.5),
    },
}));

const PhotoContainer = styled(Box)({
    flex: '0 0 35%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
});

const Photo = styled('img')(({theme}) => ({
    width: '100%',
    height: 'auto',
    maxHeight: '500px',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    objectFit: 'cover',
    opacity: '0',
    [theme.breakpoints.down('md')]: {
        width: '70%',
    },
}));

const InfoBlock = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: theme.spacing(2),
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    opacity: '0',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1.5),
    },
}));

const ScrollableContent = styled(Box)({
    flex: 1,
    maxHeight: 'calc(80vh - 120px)',
    '&::-webkit-scrollbar': {
        width: '4px',
    },
    '&::-webkit-scrollbar-track': {
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '2px',
    },
});

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
                    x: isMobile ? 0 : -30,
                    y: isMobile ? 20 : 0,
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: `${(index + 1) * 10}% center`,
                        end: `${30 + (index + 1) * 10}% center`,
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