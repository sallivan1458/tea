import {useCallback, useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {
    GoodsBlock,
    GoodsContainer,
    GoodsContent,
    GoodsTitle,
    GoodsScrollContainer,
} from './Styled';
import {CardGoods} from "components/CardGoods.tsx";
import {goods} from "../../description.ts";
import {useAppSelector} from "../../store/store.ts";
import {useMediaQuery} from "@mui/material";


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

    const isTouchDevice = useAppSelector(state => state.device.deviceType === 'touchDevice');

    const [centeredCardIndex, setCenteredCardIndex] = useState<number | null>(null);
    const isMobile = useMediaQuery('(max-width:600px)');
    const findCenteredCard = useCallback(() => {
        if (!scrollContainerRef.current || !isMobile) return;

        const container = scrollContainerRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        const cards = container.children;
        let closestCardIndex = null;
        let minDistance = Infinity;

        for (let i = 0; i < cards.length; i++) {
            const cardRect = cards[i].getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(cardCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestCardIndex = i;
            }
        }

        setCenteredCardIndex(closestCardIndex);
    }, [isMobile]);

    // Отслеживание скролла
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || !isMobile) return;

        const handleScroll = () => {
            findCenteredCard();
        };

        container.addEventListener('scroll', handleScroll);
        // Инициализация при монтировании
        findCenteredCard();

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [findCenteredCard, isMobile]);


    useGSAP(() => {
        gsap.fromTo(educationTitle.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: educationSection.current,
                anticipatePin: 1,
                start: '-35% center',
                end: '-15% center',
                scrub: !isTouchDevice,
            }
        });


        if (isTouchDevice) {
            educationBlocks.forEach((block, index) => {

                // Для touch-устройств простой таймлайн
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: educationSection.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                });

                tl.fromTo(block.current, {
                    opacity: 0,
                    x: 100
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    delay: index * 0.2
                });
            })
        }


    }, {scope: educationSection});

    useGSAP(() => {
        if (!isTouchDevice) {
            educationBlocks.forEach((block, index) => {
                gsap.set(block.current, {
                    opacity: 0,
                    x: 100,
                    immediateRender: true
                });

                gsap.fromTo(block.current, {
                    opacity: 1,
                    x: 0
                }, {
                    opacity: 0,
                    x: -100,
                    scrollTrigger: {
                        trigger: educationSection.current,
                        start: `center ${20 + index * 4}%`,
                        end: `center ${-10 + index * 3}%`,
                        scrub: !isTouchDevice,
                        anticipatePin: 1,
                    }
                });
            });
        }

        if (!isTouchDevice) {

            educationBlocks.forEach((block, index) => {

                gsap.fromTo(block.current, {
                    opacity: 0,
                    x: 100,
                    immediateRender: true
                }, {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: educationSection.current,
                        start: `-${20 + index * 16}% center`,
                        end: `-${5 + index * 12}% center`,
                        scrub: true,
                    }
                });
            });
        }
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
                                isCentered={isMobile && centeredCardIndex === index}
                            />
                        </GoodsBlock>
                    ))}
                </GoodsScrollContainer>
            </GoodsContent>
        </GoodsContainer>
    );
};

export default GoodsSection;