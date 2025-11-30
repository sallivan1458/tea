import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import {
    StyledAdvantagesSection,
    StyledTitle,
    StyledAdvantageBlock,
    StyledImageBlock,
    StyledTextContainer,
    StyledBlockTitle,
    StyledBlockDescription
} from './Styled';

import {Box, useMediaQuery} from "@mui/material";
import {useAppSelector} from "../../store/store.ts";
import {advantagesBlocks} from "../../description.ts";

gsap.registerPlugin(ScrollTrigger);

interface IAdvantagesSectionProps {
    id: string;
}


const AdvantagesSection = ({id}: IAdvantagesSectionProps) => {
    const advantagesSection = useRef<HTMLDivElement>(null);
    const advantagesTitle = useRef<HTMLHeadingElement>(null);
    const advantageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const isTouchDevice = useAppSelector(state => state.device.deviceType === 'touchDevice');
    const isMin600Width = useMediaQuery('(min-width:600px)');

    useGSAP(() => {
        if (advantagesTitle.current) {
            gsap.set(advantagesTitle.current, {opacity: 0, y: 20});
        }

        advantageRefs.current.forEach((blockRef, index) => {
            if (blockRef) {
                const isImageOnLeft = index % 2 === 0;
                const imageElement = blockRef.children[0];
                const textElement = blockRef.children[1];

                // Скрываем элементы мгновенно
                gsap.set(imageElement, {opacity: 0, x: isImageOnLeft ? -200 : 200});
                gsap.set(textElement, {opacity: 0, x: isImageOnLeft ? 100 : -100, y: 100});
            }
        });


        // --- 2. Запускаем анимации (теперь они используют эти начальные состояния как "from") ---

        gsap.to(advantagesTitle.current, {
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

        advantageRefs.current.forEach((blockRef) => {
            if (blockRef) {
                const imageElement = blockRef.children[0];
                const textElement = blockRef.children[1];

                // Теперь используем gsap.to, так как начальные стили уже установлены
                gsap.to(imageElement, {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: imageElement,
                        start: `${!isMin600Width ? 'top 40%' : 'top 85%'}`,
                        end: 'top 55%',
                        scrub: !isTouchDevice,
                    }
                });

                gsap.to(textElement, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1.2,
                    delay: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: imageElement,
                        start: `${!isMin600Width ? 'top 40%' : 'top 85%'}`,
                        end: 'top 55%',
                        scrub: !isTouchDevice,
                    }
                });
            }
        });
    }, {scope: advantagesSection});

    return (
        <StyledAdvantagesSection
            id={id}
            ref={advantagesSection}
        >
            <StyledTitle variant="h2" ref={advantagesTitle}>
                ADVANTAGES
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
                            <StyledImageBlock
                                picture={block.picture}
                                isImageOnLeft={isImageOnLeft}
                            />

                            <StyledTextContainer isImageOnLeft={isImageOnLeft}>
                                <StyledBlockTitle variant="h3">
                                    {block.title}
                                </StyledBlockTitle>
                                <StyledBlockDescription variant="body1">
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