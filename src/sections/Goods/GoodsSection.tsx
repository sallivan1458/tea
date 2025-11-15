import {useRef} from 'react';
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
                scrub: !isTouchDevice,
            }
        });

        if (!isTouchDevice) {
            educationBlocks.forEach((block, index) => {
                gsap.fromTo(block.current, {
                    opacity: 1,
                    x: 0
                }, {
                    opacity: 0,
                    x: -100,
                    scrollTrigger: {
                        trigger: educationSection.current,
                        start: `center ${20 + index * 3}%`,
                        end: `center ${-10 + index * 2}%`,
                        scrub: !isTouchDevice,
                    }
                });
            });
        }


        educationBlocks.forEach((block, index) => {
            if (isTouchDevice) {
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
                    x: 100 // Сдвиг на 100px
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    delay: index * 0.2
                });
            } else {

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
            }
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
            </GoodsContent>
        </GoodsContainer>
    );
};

export default GoodsSection;