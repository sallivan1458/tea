import {useRef, useState, useEffect} from 'react'; // <--- Добавили useEffect
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {useTheme, useMediaQuery} from '@mui/material';
import {
    GoodsBlock,
    GoodsContainer,
    GoodsContent,
    GoodsTitle,
    GoodsScrollContainer,
    ScrollButton,
    ScrollControls
} from './Styled';
import {CardGoods, CardGoodsProps} from "components/CardGoods.tsx";
import {ChevronLeft, ChevronRight} from '@mui/icons-material';
import standartTEA from './../../assets/standardTEA.jpg'
import personalTEA from './../../assets/personalTEA.jpg'
import examTEA from './../../assets/examTEA.jpg'


interface IEducationSectionProps {
    id: string
}

const GoodsSection = ({id}: IEducationSectionProps) => {
    const educationSection = useRef(null)
    const educationTitle = useRef(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const educationBlocks = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null)
    ];

    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

    const [activeIndex, setActiveIndex] = useState(0);

    const goods: CardGoodsProps[] = [
        {
            price: 1500,
            text: 'Индивидуальное занятие подобранное под ваш уровень и ваши задачи',
            title: 'StandartTEA',
            image: standartTEA
        },
        {
            price: 2000,
            text: 'Индивидуально составленое занятие на вашу тему и специально подобранное под ваш уровень',
            title: 'PersonalTEA',
            image: personalTEA
        },
        {
            price: 1200,
            text: 'Занятие, после которого у вас будет увернность для сдачи ОГЭ ЕГЭ на 90+ ',
            title: 'ExamTEA',
            image: examTEA
        }
    ]

    const scrollLeft = () => {
        setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const scrollRight = () => {
        setActiveIndex(prevIndex => Math.min(prevIndex + 1, goods.length - 1));
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        const targetElement = educationBlocks[activeIndex]?.current;

        if (container && targetElement) {
            // Вычисляем позицию для центрирования элемента
            const containerWidth = container.offsetWidth;
            const targetLeft = targetElement.offsetLeft;
            const targetWidth = targetElement.offsetWidth;

            // Формула: (позиция элемента слева) + (половина ширины элемента) - (половина ширины контейнера)
            const scrollTo = targetLeft + targetWidth / 2 - containerWidth / 2;

            container.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    }, [activeIndex]);


    useGSAP(() => {
        gsap.fromTo(educationTitle.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: educationSection.current,
                start: '-20% center',
                end: '-5% center',
                scrub: true,
            }
        });

        educationBlocks.forEach((block, index) => {
            gsap.fromTo(block.current, {
                opacity: 1,
                x: 0
            }, {
                opacity: 0,
                x: -100,
                scrollTrigger: {
                    trigger: educationSection.current,
                    start: `center ${10 + index * 3}%`,
                    end: `center ${-10 + index * 2}%`,
                    scrub: true,
                }
            });
        });

        educationBlocks.forEach((block, index) => {
            gsap.fromTo(block.current, {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: educationSection.current,
                    start: `-${20 + index * 3}% center`,
                    end: `-${5 + index * 2}% center`,
                    scrub: true,
                }
            });
        });

    }, {scope: educationSection});

    return (
        <GoodsContainer
            id={id}
            ref={educationSection}
        >
            <GoodsTitle
                variant="h1"
                ref={educationTitle}
            >
                Lesson formats
            </GoodsTitle>

            <GoodsContent>
                <GoodsScrollContainer ref={scrollContainerRef}>
                    {goods.map((good, index) => (
                        <GoodsBlock
                            key={index}
                            ref={educationBlocks[index]}
                        >
                            <CardGoods
                                image={good.image}
                                title={good.title}
                                price={good.price}
                                text={good.text}
                            />
                        </GoodsBlock>
                    ))}
                </GoodsScrollContainer>

                {!isMdScreen && (
                    <ScrollControls>
                        <ScrollButton onClick={scrollLeft}>
                            <ChevronLeft fontSize="large"/>
                        </ScrollButton>
                        <ScrollButton onClick={scrollRight}>
                            <ChevronRight fontSize="large"/>
                        </ScrollButton>
                    </ScrollControls>
                )}
            </GoodsContent>
        </GoodsContainer>
    );
};

export default GoodsSection;