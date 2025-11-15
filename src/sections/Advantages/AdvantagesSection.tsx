import {useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
    StyledAdvantagesSection,
    StyledTitle,
    StyledAdvantageBlock,
    StyledImageBlock,
    StyledTextContainer,
    StyledBlockTitle,
    StyledBlockDescription
} from './Styled';

import indApprJPG from '../../assets/IndividualApproach.jpg';
import platform from '../../assets/platform.webp';
import speaking from '../../assets/conversationalPractice.webp';
import {Box, useMediaQuery} from "@mui/material";
import {useAppSelector} from "../../store/store.ts";

gsap.registerPlugin(ScrollTrigger);

interface IAdvantagesSectionProps {
    id: string;
}

interface IAdvantageBlock {
    picture: string;
    title: string;
    description: string;
}

const advantagesBlocks: IAdvantageBlock[] = [
    {
        picture: indApprJPG,
        title: '01 Подход к уроку',
        description: 'Индивидуальные уроки для каждого ученика специально подобранные под его уровень'
    },
    {
        picture: speaking,
        title: '02 Много разговорной практики',
        description: 'Уже за первую неделю придет понимание английского языка и уже через месяц вы сможете на нем говорить'
    },
    {
        picture: platform,
        title: '03 Удобная платформа',
        description: 'Удобнейшая платформа, на которой можно выполнять как интерактивные задания, так и запоминать слова'
    },
];

const AdvantagesSection = ({ id }: IAdvantagesSectionProps) => {
    const advantagesSection = useRef<HTMLDivElement>(null);
    const advantagesTitle = useRef<HTMLHeadingElement>(null);
    const advantageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const isTouchDevice = useAppSelector(state => state.device.deviceType === 'touchDevice');
    const isMin600Width = useMediaQuery('(min-width:600px)');

    useGSAP(() => {
        gsap.fromTo(advantagesTitle.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: advantagesSection.current,
                start: 'top 80%',
                end: 'top 60%',
                scrub: !isTouchDevice,
            }
        });

        advantageRefs.current.forEach((blockRef, index) => {
            if (blockRef) {
                const isImageOnLeft = index % 2 === 0;
                const imageElement = blockRef.children[0];
                const textElement = blockRef.children[1];

                gsap.fromTo(imageElement, {
                    opacity: 0,
                    x: isImageOnLeft ? -200 : 200
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: imageElement,
                        start: `${!isMin600Width? 'top 40%' : 'top 85%'}`,
                        end: 'top 55%',
                        scrub: !isTouchDevice,
                    }
                });

                gsap.fromTo(textElement, {
                    opacity: 0,
                    x: isImageOnLeft ? 100 : -100,
                    y: 100,
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1.2,
                    delay: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: imageElement,
                        start: `${!isMin600Width? 'top 40%' : 'top 85%'}`,
                        end: 'top 55%',
                        scrub: !isTouchDevice,
                    }
                });
            }
        });
    }, { scope: advantagesSection });

    return (
        <StyledAdvantagesSection
            id={id}
            ref={advantagesSection}
        >
            <StyledTitle variant="h2" ref={advantagesTitle}>
                Мои преимущества
            </StyledTitle>

            <Box>
                {advantagesBlocks.map((block, index) => {
                    const isImageOnLeft = index % 2 === 0;

                    return (
                        <StyledAdvantageBlock
                            key={index}
                            ref={(el: HTMLDivElement | null) => (advantageRefs.current[index] = el)}
                            isImageOnLeft={isImageOnLeft}
                        >
                            <StyledImageBlock picture={block.picture} isImageOnLeft={isImageOnLeft} />

                            <StyledTextContainer isImageOnLeft={isImageOnLeft}>
                                <StyledBlockTitle variant="h3">
                                    {block.title}
                                </StyledBlockTitle>
                                <StyledBlockDescription variant="h5">
                                    {block.description}
                                </StyledBlockDescription>
                            </StyledTextContainer>
                        </StyledAdvantageBlock>
                    );
                })}
            </Box>
        </StyledAdvantagesSection>
    );
};

export default AdvantagesSection;