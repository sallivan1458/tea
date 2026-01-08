import standartTEA from "./assets/standardTEA.webp";
import personalTEA from "./assets/personalTEA.webp";
import examTEA from "./assets/examTEA.webp";
import indApprWEBP from "./assets/IndividualApproach.webp";
import speakingWEBP from "./assets/conversationalPractice.webp";
import platformWEBP from "./assets/platform.webp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";


export interface CardGoodsProps {
    image?: string;
    text?: string[];
    title?: string;
    price?: number;
}
export const goods: CardGoodsProps[] = [
    {
        price: 2000,
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
        price: 2500,
        text: [
            'Индивидуальная программа под ваши цели и интересы',
            'Разговорная практика и преодоление языкового барьера',
            'Углубленное изучение нюансов языка',
            'Структурирование знаний лексики и грамматики',
        ],
        title: 'PersonalTEA',
        image: personalTEA
    },
    {
        price: 1500,
        text: [
            'Отработка форматов ОГЭ, ЕГЭ',
            'Разбор ошибок и сложных моментов',
            'Практика всех разделов: Listening, Reading, Writing, Speaking',
            'Пробные тесты с детальным анализом',
        ],
        title: 'ExamTEA',
        image: examTEA
    }
]


export interface QuestionCardProps {
    text?: string;
    title?: string;
}
export const questions: QuestionCardProps[] = [
    {title: '01 Сколько длиться одно занятие?', text: 'Есть всего два формата 1ч и 1.5ч'},
    {title: '02 Что делать если я хочу перенести урок?', text: 'Для переноса или отмены урока нужно сообщить за 24 часа, в иных случаях отмена будет платной'},
    {title: '03 Есть ли скидки при оплате пакета занятий?', text: 'Есть скидка в 5%'},
    {title: '04 Когда я заговорю по английски?', text: 'Всё зависит от вашей заинтересованности, вы можете свободно начаться общаться как после 3 месяцев, так и после года'},
    {title: '05 Как будут проходить уроки?', text: 'Уроки проходят на удобной платформе Edvide, на которой можно как сделать домашнее задание, так и заглянуть в словарик и повторить слова'},
];






export interface IReview {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string | undefined;
}
export const reviews: IReview[] = [
    {
        id: '1',
        title: 'Алексей',
        description: 'Занимаюсь с Сергеем уже 5 месяцев и я заметил прогресс в моём английском.  Записался на занятие, чтобы укрепить свой уровень на крепком B2. Понравилось, что преподаватель подстраивает манеру речи и темы занятий под  ученика и его запросы. Несмотря на специфической порой юмор, очень хорошо всё объясняет и старается сделать занятие интересным. Сейчас я уже вижу свои ошибки, когда пишу, и стараюсь их исправлять. Рекомендую его всем, кто хочет прокачать свой английский',
        image: undefined,
        date: '1766692800000'
    },


];


interface IAdvantageBlock {
    picture: string;
    title: string;
    description: string;
}
export const advantagesBlocks: IAdvantageBlock[] = [
    {
        picture: indApprWEBP,
        title: '01 Подход к уроку',
        description: 'Индивидуальные уроки для каждого ученика специально подобранные под его уровень'
    },
    {
        picture: speakingWEBP,
        title: '02 Много разговорной практики',
        description: 'Уже за первую неделю придет понимание английского языка и уже через месяц вы сможете на нем говорить'
    },
    {
        picture: platformWEBP,
        title: '03 Удобная платформа',
        description: 'Удобнейшая платформа, на которой можно выполнять как интерактивные задания, так и запоминать слова'
    },
];




export const SectionId = {
    GREETING: 'greeting',
    ABOUT_ME: 'aboutMe',
    ADVANTAGES: 'advantages',
    GOODS: 'goods',
    REVIEWS: 'reviews',
    QUESTIONS: 'questions',
    CONTACTS: 'contacts',
} as const;


export const buttons = [
    { title: 'TEA', targetId: SectionId.GREETING },
    { title: 'ABOUT ME', targetId: SectionId.ABOUT_ME },
    { title: 'ADVANTAGES', targetId: SectionId.ADVANTAGES },
    { title: 'GOODS', targetId: SectionId.GOODS },
    { title: 'REVIEWS', targetId: SectionId.REVIEWS },
    { title: 'QUESTIONS', targetId: SectionId.QUESTIONS },
    { title: 'CONTACTS', targetId: SectionId.CONTACTS },
] as const;

export const scrollSections = Object.values(SectionId);




export const contacts = [
    {
        icon: WhatsAppIcon,
        title: 'Написать в WhatsApp Business',
        action: () => {
            const phoneNumber = '89677388426';
            const message = 'Здравствуйте! Хотел бы с вами начать заниматься, когда можно будет провести пробное занятие?';
            const encodedMessage = encodeURIComponent(message);

            // Специальный URL для WhatsApp Business
            window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`);
        },
        color: '#25D366'
    },
    {
        icon: TelegramIcon,
        title: 'Написать в Telegram',
        action: () => {
            const username = 'LermadoExpunso';
            const message = 'Здравствуйте! Хотел бы с вами начать заниматься, когда можно будет провести ознакомительное занятие?';
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://t.me/${username}?text=${encodedMessage}`);
        },
        color: '#0088cc'
    }
    // {
    //     icon: MailIcon,
    //     title: 'Написать на почту',
    //     action: () => window.open('mailto:your@email.com'),
    //     color: '#eadb35'
    // }
];


export const infoBlocks = [
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