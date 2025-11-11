import {CardGoodsProps} from "components/CardGoods.tsx";
import standartTEA from "./assets/standardTEA.jpg";
import personalTEA from "./assets/personalTEA.jpg";
import examTEA from "./assets/examTEA.jpg";
import {QuestionCardProps} from "components/CardQuestion.tsx";
import DimaZvedovPNG from "./assets/standardTEA.jpg";
import MihailBardashPNG from "./assets/personalTEA.jpg";
import VladimirPutinPNG from "./assets/examTEA.jpg";
import bogdanJPG from "./assets/bogomDAN.jpg";
import {IReview} from "./sections/Reviews/ReviewsSection.tsx";

export const goods: CardGoodsProps[] = [
    {
        price: 1500,
        text: [
            'Разговорная практика и преодоление языкового барьера',
            'Пополнение словарного запаса по бытовым темам',
            'Аудирование и понимание ньюансов английской речи',
            'Чтение и обсуждение текстов',
        ],
        title: 'StandartTEA',
        image: standartTEA
    },
    {
        price: 2000,
        text: [
            'Индивидуальная программа под ваши цели и интересы',
            'Разговорная практика и преодоление языкового барьера',
            'Пополнение словарного запаса по бытовым темам',
            'Аудирование и понимание ньюансов английской речи',
            'Чтение и обсуждение текстов',
        ],
        title: 'PersonalTEA',
        image: personalTEA
    },
    {
        price: 1200,
        text: [
            'Отработка форматов ОГЭ, ЕГЭ',
            'Разбор ошибок и сложных моментов',
            'Практика всех разделов: Listening, Reading, Writing, Speaking',
            'Пробные тесты с детальным анализом',
            'Уверенность перед экзаменом',
        ],
        title: 'ExamTEA',
        image: examTEA
    }
]


export const questions: QuestionCardProps[] = [
    {title: '01 Сколько длиться одно занятие?', text: 'Есть всего два формата 1ч и 1.5ч'},
    {title: '02 Что делать если я хочу перенести урок?', text: 'Для переноса или отмены урока нужно сообщить за 24 часа, в иных случаях отмена будет платной'},
    {title: '03 Есть ли скидки при оплате пакета занятий?', text: 'Есть скидка в 5%'},
    {title: '04 Когда я заговорю по английски?', text: 'Всё зависит от вашей заинтересованности, вы можете свободно начаться общаться как после 3 месяцев, так и после года'},
    {title: '05 Как будут проходить уроки?', text: 'Уроки проходят на удобной платформе Edvide, на которой можно как сделать домашнее задание, так и заглянуть в словарик и повторить слова'},
];





export const reviews: IReview[] = [
    {
        id: '1',
        title: 'Dima',
        description: 'Стандартный урок английского языка, охватывающий все аспекты: грамматику, лексику, аудирование и разговорную практику.',
        image: DimaZvedovPNG,
        date: '1755873602612'
    },
    {
        id: '2',
        title: 'Mihail',
        description: 'Персональный урок, разработанный специально под ваши цели и потребности. Индивидуальный подход и фокус на конкретных темах.',
        image: MihailBardashPNG,
        date: '1755873602612'
    },
    {
        id: '3',
        title: 'Vladimir',
        description: 'Специализированная подготовка к экзаменам ОГЭ, ЕГЭ, IELTS или TOEFL. Прорабатываем экзаменационные стратегии и типовые задания.',
        image: VladimirPutinPNG,
        date: '1755873602612'
    }, {
        id: '4',
        title: 'Bogdan',
        description: 'Описание совершенного урока номер 4, не очень большое колличество текста',
        image: bogdanJPG,
        date: '1755873602612'
    },
    {
        id: '5',
        title: 'Kirill',
        description: 'Описание совершенного урока номер 5, не очень большое колличество текста',
        image: VladimirPutinPNG,
        date: '1755873602612'
    }
];