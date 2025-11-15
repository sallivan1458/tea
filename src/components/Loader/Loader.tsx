import {
    LoaderContainer,
    LoaderContent,
    LoaderText,
    ContinueButton,
} from './Styled';
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {useEffect, useRef, useState} from "react";
import {setLoading} from "../../store/LoadingState.ts";
import { gsap } from 'gsap';
import {SplitText} from "gsap/SplitText";

interface LoaderProps {
    text?: string;
    subText?: string;
}

const Loader = ({
                    text = 'Tieferlied English Academy',
                    subText = 'Место, где английский становится твоим конкурентным преимуществом'
                }: LoaderProps) => {

    const loadingState = useAppSelector(state => state.loading.loading)
    const dispatch = useAppDispatch()
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [countdown, setCountdown] = useState(6);
    const mainTextRef = useRef<HTMLDivElement>(null);
    const subTextRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const countdownTimerRef = useRef<number>();

    useEffect(() => {
        // Анимация появления основного текста
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
                color: 'rgba(255, 255, 255, 0.3)' // Начальный серый цвет
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            },
            "-=0.5"
        ).call(() => {
            // Анимация появления текста по буквам
            if (subTextRef.current) {

                // Разбиваем текст на символы
                const split = new SplitText(subTextRef.current, {
                    type: "chars,words,lines",
                    wordsClass: "word",
                    charsClass: "char",
                    linesClass: "line"
                });
                gsap.set(split.chars, { color: 'rgba(255, 255, 255, 0.3)' });
                // Анимация появления каждого символа
                split.chars.forEach((char, index) => {
                    const tl = gsap.timeline({
                        delay: index * 0.05
                    });

                    tl.to(char, {
                        color: `rgb(52, 248, 149)`,
                        duration: 0.05,
                        ease: "power2.out"
                    })
                        .to(char, {
                            color: 'rgba(255, 255, 255, 1)',
                            duration: 0.1,
                            ease: "power2.out"
                        });
                });
            }
        });

    }, []);

    useEffect(() => {
        if (loadingState === 'ready') {
            // Анимация появления кнопки
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

            // Запускаем обратный отсчет
            countdownTimerRef.current = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        handleContinue();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (countdownTimerRef.current) {
                clearInterval(countdownTimerRef.current);
            }
        };
    }, [loadingState]);


    const handleContinue = () => {
        if (countdownTimerRef.current) {
            clearInterval(countdownTimerRef.current);
        }

        setIsFadingOut(true);

        // Анимация исчезновения через GSAP
        const tl = gsap.timeline();
        tl.to([mainTextRef.current, subTextRef.current, buttonRef.current], {
            opacity: 0,
            y: -50,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.1
        });

        setTimeout(() => {
            dispatch(setLoading('success'))
        }, 2000);
    };

    useEffect(() => {
        if (loadingState === 'lastSecond'){
            handleContinue();
        }
    }, [loadingState, dispatch]);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <LoaderContainer
            id={'loaderContainer'}
            className={isFadingOut ? 'fade-out' : ''}
        >
            <LoaderContent>
                <LoaderText
                    variant="h2"
                    className="main-text"
                    ref={mainTextRef}
                >
                    {text}
                </LoaderText>
                <LoaderText
                    variant="h6"
                    className="sub-text"
                    ref={subTextRef}
                >
                    {subText}
                </LoaderText>

                {loadingState === 'ready' && (
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