import {Typography, Box} from '@mui/material';
import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {CardQuestion} from "components/CardQuestion.tsx";
import {useAppSelector} from "../store/store.ts";
import {questions} from "../description.ts";


interface IQuestionsSectionProps {
    id:string
}

const QuestionsSection = ({id}:IQuestionsSectionProps) => {
    const questionsSection = useRef(null);
    const questionsTitle = useRef(null);
    const questionCards = useRef<(HTMLDivElement | null)[]>([]);

    const isTouchDevice = useAppSelector(state => state.device.deviceType === 'touchDevice')



    useGSAP(() => {
        // Анимация заголовка
        gsap.fromTo(questionsTitle.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: questionsSection.current,
                start: 'top 80%',
                end: 'top 75%',
                scrub: !isTouchDevice,
            }
        });

        // Анимация карточек вопросов
        questionCards.current.forEach((card, index) => {
            if (!card) return;

            gsap.fromTo(card, {
                opacity: 0,
                y: 60,
                x: index % 2 === 0 ? -30 : 30
            }, {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'top 50%',
                    scrub:!isTouchDevice
                }
            });
        });

    }, {scope: questionsSection});

    return (
        <Box
            id={id}
            ref={questionsSection}
            sx={{
                mb: '20vh',
                willChange: 'transform'
            }}
        >
            <Typography
                variant="h2"
                ref={questionsTitle}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    willChange: 'opacity, transform',
                    mb: '10vh'
                }}
            >
                Вопросы?
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                {questions.map((item, index) => (
                    <div
                        key={index}
                        ref={el => questionCards.current[index] = el}
                    >
                        <CardQuestion title={item.title} text={item.text}/>
                    </div>
                ))}
            </Box>
        </Box>
    );
};

export default QuestionsSection;