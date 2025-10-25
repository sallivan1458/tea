import { Typography, Box, Button } from '@mui/material';
import { useRef, useState, ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import SchoolIcon from '@mui/icons-material/School';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlagIcon from '@mui/icons-material/Flag';

interface TeaFormat {
    id: string;
    title: string;
    price: string;
    description: string[];
    icon: ReactNode;
}

interface IGoodsSectionProps {
    id: string;
}

const GoodsSection = ({ id }: IGoodsSectionProps) => {
    const goodsSection = useRef(null);
    const goodsTitle = useRef(null);
    const goodsContainer = useRef(null);
    const descriptionBoxRef = useRef(null);
    const buttonsBoxRef = useRef(null);

    const [activeFormat, setActiveFormat] = useState('standardTEA');

    const formats: TeaFormat[] = [
        {
            id: 'standardTEA',
            title: 'Standard',
            price: '1500 руб./час',
            description: [
                'Охватываем все аспекты языка: грамматику, лексику, аудирование и разговорную практику.',
                'Подходит для любого уровня: от начинающего до продвинутого.',
                'Классическая программа для уверенного прогресса.'
            ],
            icon: <SchoolIcon />
        },
        {
            id: 'personalTEA',
            title: 'Personal',
            price: '2500 руб./час',
            description: [
                'Индивидуальный план, разработанный под ваши цели и интересы.',
                'Фокус на конкретных темах, необходимых для работы или путешествий.',
                'Максимальная эффективность благодаря персонализированному подходу.'
            ],
            icon: <PersonAddIcon />
        },
        {
            id: 'examTEA',
            title: 'Exam',
            price: '2000 руб./час',
            description: [
                'Специализированная подготовка к ОГЭ, ЕГЭ, IELTS или TOEFL.',
                'Проработка экзаменационных стратегий и типовых заданий.',
                'Разбор ошибок и повышение балла.'
            ],
            icon: <FlagIcon />
        }
    ];

    const currentFormat = formats.find(f => f.id === activeFormat);

    useGSAP(() => {

        gsap.fromTo(goodsTitle.current, {
            opacity: 0,
            y: 40
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

        gsap.fromTo(goodsContainer.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: goodsSection.current,
                start: '-5% center',
                end: '5% center',
                scrub: true,
            }
        });

        gsap.fromTo(buttonsBoxRef.current, {
            y: '150%'
        }, {
            y: 0,
            scrollTrigger: {
                trigger: goodsSection.current,
                start: '-5% center',
                end: '25% center',
                scrub: true,
            }
        });

        gsap.fromTo(descriptionBoxRef.current, {
            y: '-150%'
        }, {
            y: 0,
            scrollTrigger: {
                trigger: goodsSection.current,
                start: '-5% center',
                end: '25% center',
                scrub: true,
            }
        });
    }, { scope: goodsSection });


    return (
        <Box
            id={id}
            ref={goodsSection}
            sx={{
                position: 'relative',
                pb: '10vh',
                willChange: 'transform',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '90vh',
                mb: '20vh',
            }}
        >
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
                ref={goodsContainer}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr',
                    gap: 4,
                    p: 4,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    height: '100%',
                    borderRadius: '16px',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    overflow: 'hidden',
                    willChange: 'opacity, transform',
                }}
            >
                {/* Левый блок с кнопками */}
                <Box
                    ref={buttonsBoxRef}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        willChange: 'transform',
                    }}
                >
                    {formats.map((format) => (
                        <Button
                            key={format.id}
                            variant={activeFormat === format.id ? 'contained' : 'outlined'}
                            onClick={() => setActiveFormat(format.id)}
                            sx={{
                                justifyContent: 'flex-start',
                                p: 2,
                                fontSize: '1.2rem'
                            }}
                            startIcon={format.icon}
                        >
                            {format.title}
                        </Button>
                    ))}
                </Box>

                {/* Правый блок с описанием */}
                <Box
                    ref={descriptionBoxRef}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 3,
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        willChange: 'transform',
                    }}
                >
                    {currentFormat && (
                        <>
                            <Typography variant="h2" sx={{ mb: 2 }}>
                                {currentFormat.title}
                            </Typography>

                            <Box sx={{ height: '100%', marginBottom: '16px', marginRight: '50px' }}>
                                {currentFormat.description.map((item, index) => (
                                    <Typography
                                        key={index}
                                        variant="h6"
                                        sx={{ mb: 1 }}
                                    >
                                        • {item}
                                    </Typography>
                                ))}
                            </Box>

                            <Typography
                                variant="h4"
                                sx={{
                                    textAlign: 'end'
                                }}
                            >
                                {currentFormat.price}
                            </Typography>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default GoodsSection;