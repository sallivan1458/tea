import {
    LoaderContainer,
    LoaderContent,
    LoaderText,
    ContinueButton,
    VideoBackground,
    VideoContainer, ImgBackground,
} from './Styled';
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {useEffect, useRef, useState} from "react";
import {setLoading} from "../../store/LoadingState.ts";
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import firstVideoWEBM from '../../assets/firstVideo.webm'
import secondVideoWEBM from '../../assets/secondVideo.webm'

import firstVideoMP4 from '../../assets/firstVideo.mp4'
import secondVideoMP4 from '../../assets/secondVideo.mp4'

import TEALogoWEBP from '../../assets/logo.webp'
interface LoaderProps {
    subText?: string;
}

const Loader = ({
                    subText = 'Место, где английский становится твоим конкурентным преимуществом'
                }: LoaderProps) => {

    const loadingState = useAppSelector(state => state.loading.loading)
    const dispatch = useAppDispatch()
    const [countdown, setCountdown] = useState(5);
    const [currentVideo, setCurrentVideo] = useState<'first' | 'second'>('first');
    const [isFirstVideoReady, setIsFirstVideoReady] = useState(false);
    const [isSecondVideoReady, setIsSecondVideoReady] = useState(false);
    const [isVideosPreloaded, setIsVideosPreloaded] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState<boolean|undefined>(undefined);

    const mainTextRef = useRef<HTMLDivElement>(null);
    const subTextRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const countdownTimerRef = useRef<number>();
    const containerRef = useRef<HTMLDivElement>(null);
    const firstVideoRef = useRef<HTMLVideoElement>(null);
    const secondVideoRef = useRef<HTMLVideoElement>(null);
    const imgRef = useRef<HTMLImageElement>(null); // Добавляем ref для фото

    // Определяем мобильное устройство
    useEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        setIsMobileDevice(isMobile);
    }, []);

    // Отслеживаем готовность обоих видео
    useEffect(() => {
        if (isMobileDevice) return
        if (isFirstVideoReady && isSecondVideoReady && !isVideosPreloaded) {
            // console.log('Оба видео готовы, устанавливаем isVideosPreloaded = true');
            setIsVideosPreloaded(true);
        }
    }, [isFirstVideoReady, isSecondVideoReady, isVideosPreloaded, isMobileDevice]);

    // Предзагрузка видео - ЗАПУСКАЕТСЯ ТОЛЬКО ОДИН РАЗ
    useEffect(() => {
        if (isMobileDevice) return
        // console.log("Инициализация загрузки видео");

        const firstVideoElement = firstVideoRef.current;
        const secondVideoElement = secondVideoRef.current;

        // Настройка первого видео
        if (firstVideoElement) {
            firstVideoElement.preload = 'auto';
            firstVideoElement.muted = true;

            const handleFirstVideoReady = () => {
                // console.log('firstVideoReady');
                setIsFirstVideoReady(true);
            };

            firstVideoElement.oncanplaythrough = handleFirstVideoReady;
        }

        // Настройка второго видео
        if (secondVideoElement) {
            secondVideoElement.preload = 'auto';
            secondVideoElement.muted = true;

            const handleSecondVideoReady = () => {
                // console.log('secondVideoReady');
                setIsSecondVideoReady(true);
            };

            secondVideoElement.oncanplaythrough = handleSecondVideoReady;
        }

    }, [isMobileDevice]);

    // Запуск первого видео когда оба видео готовы
    useEffect(() => {
        if (isMobileDevice) return
        if (isVideosPreloaded && firstVideoRef.current && !isMobileDevice) {
            firstVideoRef.current.muted = true;
            // console.log('Запуск первого видео');
            const playFirstVideo = async () => {
                try {
                    await firstVideoRef.current?.play();
                    // console.log('Первое видео воспроизводится');
                } catch (error) {
                    console.error('Ошибка воспроизведения первого видео:', error);
                }
            };

            playFirstVideo();
        }
    }, [isVideosPreloaded, isMobileDevice]);

    // Переключение на второе видео
    useEffect(() => {
        if (isMobileDevice) return
        if (loadingState === 'lastSecond' && isSecondVideoReady && !isMobileDevice) {
            // console.log('Переключение на второе видео');
            const switchToSecondVideo = async () => {
                setCurrentVideo('second');

                setTimeout(() => {
                    if (secondVideoRef.current) {
                        secondVideoRef.current.currentTime = 0;
                        secondVideoRef.current.play().catch(console.error);
                    }
                }, 100);
            };

            switchToSecondVideo();
        }
    }, [loadingState, isSecondVideoReady, isMobileDevice]);

    // Анимация появления текста и фото
    useGSAP(() => {
        if (isMobileDevice === undefined) return
        const tl = gsap.timeline();

        tl.fromTo(mainTextRef.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            }
        ).fromTo(subTextRef.current,
            {
                opacity: 0,
                color: 'rgba(255, 255, 255, 0.8)'
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            },
            "-=0.5"
        );

        // Анимация появления фото только для мобильных устройств
        if (isMobileDevice && imgRef.current) {
            tl.fromTo(imgRef.current,
                {
                    opacity: 0,
                    scale: 0.98,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5, // Замедленная анимация
                    ease: "power4.inOut"
                },
                "-=0.3" // Начинается немного раньше завершения анимации текста
            );
        }

    }, {scope: containerRef, dependencies: [isMobileDevice]});

    // Анимация появления кнопки
    useGSAP(() => {
        if (isMobileDevice
            ? loadingState === 'ready'
            : loadingState === 'ready' && isVideosPreloaded) {
            // console.log('Анимация появления кнопки');
            const tl = gsap.timeline();
            tl.fromTo(buttonRef.current,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                }
            );
        }
    }, {dependencies: [loadingState, isVideosPreloaded, isMobileDevice], scope: containerRef});

    // Анимация исчезновения
    useGSAP(() => {
        if (loadingState === 'lastSecond') {
            const tl = gsap.timeline();
            tl.to([mainTextRef.current, subTextRef.current, buttonRef.current], {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.1
            });
            gsap.to(imgRef.current, {
                opacity: 0,
                // scale: 0.9,
                delay:0.2,
                duration: 1,
                ease: "power2.inOut",
            })
        }
    }, {dependencies: [loadingState], scope: containerRef});

    // Анимация перехода между видео
    useGSAP(() => {
        if (isMobileDevice) return
        if (currentVideo === 'second' && !isMobileDevice) {
            const tl = gsap.timeline();

            tl.to(firstVideoRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut"
            }).to(secondVideoRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.inOut"
            }, "-=0.4");
        }
    }, {dependencies: [currentVideo, isMobileDevice]});

    // Обработка готовности и обратного отсчета
    useEffect(() => {
        if (isMobileDevice
            ? loadingState === 'ready'
            : loadingState === 'ready' && isVideosPreloaded) {
            // console.log('Запуск обратного отсчета');
            const startCountdown = (currentCount: number): void => {
                if (currentCount <= 0) {
                    handleContinue();
                    return;
                }

                countdownTimerRef.current = window.setTimeout(() => {
                    setCountdown(currentCount - 1);
                    startCountdown(currentCount - 1);
                }, 1000);
            };

            startCountdown(countdown);
        }

        return () => {
            if (countdownTimerRef.current) {
                clearTimeout(countdownTimerRef.current);
            }
        };
    }, [loadingState, countdown, isVideosPreloaded, isMobileDevice]);

    const handleContinue = (): void => {
        if (countdownTimerRef.current) {
            clearTimeout(countdownTimerRef.current);
        }

        dispatch(setLoading('lastSecond'));

        setTimeout(() => {
            dispatch(setLoading('success'));
        }, 2000);
    };

    // Блокировка скролла
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <LoaderContainer
            ref={containerRef}
            id={'loaderContainer'}
            className={loadingState === 'lastSecond' ? 'fade-out' : ''}
            sx={{
                backgroundColor: isMobileDevice? '#000000' : '#010103',
            }}
        >
            {/* Показываем видео только на десктопе */}
            {!isMobileDevice ? (
                    <VideoContainer>
                        <VideoBackground
                            as="video"
                            ref={firstVideoRef}
                            muted
                            loop={false}
                            playsInline
                            autoPlay={false}
                            style={{
                                opacity: currentVideo === 'first' ? 1 : 0,
                                zIndex: currentVideo === 'first' ? 2 : 1,
                            }}
                            onEnded={() => {
                                // console.log('Первое видео завершено');
                            }}
                        >
                            <source src={firstVideoWEBM} type="video/webm"/>
                            <source src={firstVideoMP4} type="video/mp4"/>
                        </VideoBackground>

                        <VideoBackground
                            ref={secondVideoRef}
                            muted
                            loop={false}
                            playsInline
                            autoPlay={false}
                            style={{
                                opacity: currentVideo === 'second' ? 1 : 0,
                                zIndex: currentVideo === 'second' ? 2 : 1,
                            }}
                        >
                            <source src={secondVideoWEBM} type="video/webm"/>
                            <source src={secondVideoMP4} type="video/mp4"/>
                        </VideoBackground>
                    </VideoContainer>
                )
                : (
                    <VideoContainer>
                        <ImgBackground
                            ref={imgRef}
                            src={TEALogoWEBP}
                        />
                    </VideoContainer>
                )}

            <LoaderContent>
                <LoaderText
                    variant="h1"
                    className="main-text"
                    ref={mainTextRef}
                >
                    <span>TIEFERLIED</span>
                    <span>ENGLISH ACADEMY</span>
                </LoaderText>
                <LoaderText
                    variant="h6"
                    className="sub-text"
                    ref={subTextRef}
                >
                    {subText}
                </LoaderText>

                {(isMobileDevice
                    ? loadingState === 'ready'
                    : loadingState === 'ready' && isVideosPreloaded) && (
                    <ContinueButton
                        ref={buttonRef}
                        variant="contained"
                        onClick={handleContinue}
                    >
                        Нажмите чтобы продолжить ({countdown})
                    </ContinueButton>
                )}
            </LoaderContent>
        </LoaderContainer>
    );
};

export default Loader;