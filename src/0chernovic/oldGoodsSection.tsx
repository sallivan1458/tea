import {Typography, Box, Button} from '@mui/material';
import {useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

import standardTEA from '../assets/standardTEA.jpg';
import personalTEA from '../assets/personalTEA.jpg';
import examTEA from '../assets/examTEA.jpg';

// import bgGoods from './../assets/bgGoods.jpg'


interface TeaFormat {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
}

const GoodsSection = () => {
    const goodsSection = useRef(null);
    const goodsTitle = useRef(null);
    const goodsSliderSection = useRef(null);
    const sliderContainer = useRef<HTMLDivElement>(null);
    const [activeFormat, setActiveFormat] = useState('standardTEA');

    const formats: TeaFormat[] = [
        {
            id: 'standardTEA',
            title: 'Standard',
            price: '1500 руб./час',
            description: 'Стандартный урок английского языка, охватывающий все аспекты: грамматику, лексику, аудирование и разговорную практику.',
            image: standardTEA
        },
        {
            id: 'personalTEA',
            title: 'Personal',
            price: '2500 руб./час',
            description: 'Персональный урок, разработанный специально под ваши цели и потребности. Индивидуальный подход и фокус на конкретных темах.',
            image: personalTEA
        },
        {
            id: 'examTEA',
            title: 'Exam',
            price: '2000 руб./час',
            description: 'Специализированная подготовка к экзаменам ОГЭ, ЕГЭ, IELTS или TOEFL. Прорабатываем экзаменационные стратегии и типовые задания.',
            image: examTEA
        }
    ];

    useGSAP(() => {
        gsap.fromTo(goodsTitle.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: goodsSection.current,
                start: '-20% center',
                end: '-5% center',
                scrub: true,
            }
        });

        gsap.fromTo(goodsSliderSection.current, {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
                trigger: goodsSection.current,
                start: '-15% center',
                end: '-0% center',
                scrub: true,
            }
        });
    }, {scope: goodsSection});

    useGSAP(() => {
        if (sliderContainer.current) {
            const activeIndex = formats.findIndex(format => format.id === activeFormat);
            gsap.to(sliderContainer.current, {
                x: -activeIndex * 100 + '%',
                duration: 0.7,
                ease: "power2.out"
            });
        }
    }, [activeFormat]);

    const handleFormatChange = (formatId: string) => {
        setActiveFormat(formatId);
    };

    return (
        <>
            <Box
                ref={goodsSection}
                sx={{
                    position: 'relative',
                    height: '90vh',
                    pb: '10vh',
                    willChange: 'transform',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* Фоновое изображение */}
                {/*<Box*/}
                {/*    component="img"*/}
                {/*    src={bgGoods}*/}
                {/*    sx={{*/}
                {/*        position: 'absolute',*/}
                {/*        top: 0,*/}
                {/*        left: '50%',*/}
                {/*        width: '100vw',*/}
                {/*        height: '90vh',*/}
                {/*        borderRadius: '32px',*/}
                {/*        transform:'translateX(-50%)',*/}
                {/*        backgroundColor: '#010101',*/}
                {/*        zIndex: -2,*/}
                {/*        filter:'brightness(0.7)'*/}
                {/*    }}*/}
                {/*/>*/}


                <Typography
                    variant="h2"
                    ref={goodsTitle}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        willChange: 'opacity, transform',
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    Форматы занятий
                </Typography>

                <Box
                    ref={goodsSliderSection}
                    sx={{
                        borderRadius:'16px',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                    }}
                >

                    {/* Шапка с вариантами форматов */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >

                        {formats.map((format, index) => (
                            <Button
                                key={format.id}
                                onClick={() => handleFormatChange(format.id)}
                                sx={{
                                    position: 'relative',
                                    py: 2,
                                    px: 4,
                                    width: '100%',
                                    color: 'white',
                                    borderRadius: () => [
                                        index === 0 ? '16px 0 0 0' : 'none',
                                        index === 2 ? '0 16px 0 0' : 'none',
                                    ],
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: activeFormat === format.id ? '100%' : '0%',
                                        // border: activeFormat === format.id ? `2px solid ${theme.palette.primary.main}` :'none',
                                        borderBottom: 'none',
                                        borderRadius: () => [
                                            index === 0 ? '16px 0 0 0' : 'none',
                                            index === 2 ? '0 16px 0 0' : 'none',
                                        ],
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        zIndex: 1,
                                        transition: 'all 0.8s',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        border: `1px solid rgba(255, 255, 255, 0.2)`,
                                        borderBottom: 'none',
                                        borderRadius: () => [
                                            index === 0 ? '16px 0 0 0' : 'none',
                                            index === 2 ? '0 16px 0 0' : 'none',
                                        ],
                                        zIndex: 1,
                                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                />
                                <Typography variant="h6"
                                            sx={{
                                                zIndex: 2,
                                            }}
                                >
                                    {format.title}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    {/* Контейнер слайдера */}
                    <Box
                        sx={{
                            width: '100%',
                            height: '500px',
                            overflow: 'hidden',
                            position: 'relative',
                            maxWidth: '1200px',
                            borderRadius: '0 0 16px 16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 8px 8px rgba(0, 0, 0, 0.3)',
                            border: `1px solid rgba(255, 255, 255, 0.2)`,
                            borderTop: 'none',
                        }}
                    >
                        <Box
                            ref={sliderContainer}
                            sx={{
                                display: 'flex',
                                borderRadius: '16px',
                                width: formats.length * 100 + '%',
                                boxShadow: 'none'
                            }}
                        >
                            {formats.map((format) => (
                                <Box
                                    key={format.id}
                                    sx={{
                                        width: '100%',
                                        flexShrink: 0,
                                        p: 2,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: {xs: 'column', md: 'row'},
                                        }}
                                    >

                                        <Box sx={{
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}>
                                            <Typography variant="h4" gutterBottom>
                                                {format.title}
                                            </Typography>

                                            <Typography variant="h5" color="primary" gutterBottom>
                                                {format.price}
                                            </Typography>

                                            <Typography variant="body1" paragraph>
                                                {format.description}
                                            </Typography>

                                            <Button
                                                variant="contained"
                                                size="large"
                                                sx={{alignSelf: 'flex-start', mt: 2}}
                                            >
                                                Выбрать
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>

    );
};

export default GoodsSection;