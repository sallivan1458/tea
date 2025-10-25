import {Typography, Box} from '@mui/material';
import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {CardQuestion, QuestionCardProps} from "components/CardQuestion.tsx";


interface IQuestionsSectionProps {
    id:string
}

const QuestionsSection = ({id}:IQuestionsSectionProps) => {
    const questionsSection = useRef(null);
    const questionsTitle = useRef(null);
    const questionCards = useRef<(HTMLDivElement | null)[]>([]);

    const questions: QuestionCardProps[] = [
        {title: '01 Сколько длиться одно занятие?', text: 'Есть всего два формата 1ч и 1.5ч'},
        {title: '02 Что делать если я хочу перенести урок?', text: 'Для переноса или отмены урока нужно сообщить за 24 часа, в иных случаях отмена будет платной'},
        {title: '03 Есть ли скидки при оплате пакета занятий?', text: 'Есть скидка в 5%'},
        {title: '04 Когда я заговорю по английски?', text: 'Всё зависит от вашей заинтересованности, вы можете свободно начаться общаться как после 3 месяцев, так и после года'},
        {title: '05 Как будут проходить уроки?', text: 'Уроки проходят на удобной платформе Edvide, на которой можно как сделать домашнее задание, так и заглянуть в словарик и повторить слова'},
        {title: '05 Как будут проходить уроки?', text: 'Уроки проходят на удобной платформе Edvide, на которой можно как сделать домашнее задание, так и заглянуть в словарик и повторить слова'},
        {title: '05 Как будут проходить уроки?', text: 'Уроки проходят на удобной платформе Edvide, на которой можно как сделать домашнее задание, так и заглянуть в словарик и повторить слова'},
    ];

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
                scrub: true,
            }
        });

        // Анимация карточек вопросов
        questionCards.current.forEach((card, index) => {
            if (!card) return;

            gsap.fromTo(card, {
                opacity: 0,
                y: 30,
                x: index % 2 === 0 ? -20 : 20
            }, {
                opacity: 1,
                y: 0,
                x: 0,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    end: 'top 80%',
                    toggleActions: 'play none none none',
                    scrub: true
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