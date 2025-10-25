import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { StyledReviewsSection, StyledReviewTitle, StyledReviewsSlider } from './Styled';

import DimaZvedovPNG from '../../assets/standardTEA.jpg';
import MihailBardashPNG from '../../assets/personalTEA.jpg';
import VladimirPutinPNG from '../../assets/examTEA.jpg';
import bogdanJPG from '../../assets/bogomDAN.jpg';

import Carousel from "components/Carousel/Carousel.tsx";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import ReviewCard from "components/CardReview/CardReview.tsx";

gsap.registerPlugin(ScrollTrigger);

interface IReview {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
}

interface IReviewsSectionProps {
    id: string;
}

const ReviewsSection = ({ id }: IReviewsSectionProps) => {
    const reviewsSection = useRef(null);
    const reviewTitle = useRef(null);
    const reviewsSlider = useRef<EmblaCarouselType>(null);

    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

    const reviews: IReview[] = [
        {
            id: '1',
            title: 'Dima Zvedov',
            description: 'Стандартный урок английского языка, охватывающий все аспекты: грамматику, лексику, аудирование и разговорную практику.',
            image: DimaZvedovPNG,
            date: '1755873602612'
        },
        {
            id: '2',
            title: 'Mihail Bardash',
            description: 'Персональный урок, разработанный специально под ваши цели и потребности. Индивидуальный подход и фокус на конкретных темах.',
            image: MihailBardashPNG,
            date: '1755873602612'
        },
        {
            id: '3',
            title: 'Vladimir Putin',
            description: 'Специализированная подготовка к экзаменам ОГЭ, ЕГЭ, IELTS или TOEFL. Прорабатываем экзаменационные стратегии и типовые задания.',
            image: VladimirPutinPNG,
            date: '1755873602612'
        }, {
            id: '4',
            title: 'EII BOGDAN',
            description: 'ZZZZ ZZZZ ZZZZ я вообще богдан и я богом дан и я английзсиий знаю лучше всех аааауууэээ вот еще текст чтобы было большое описание и вот как оно выглядит  ',
            image: bogdanJPG,
            date: '1755873602612'
        }
    ];

    useGSAP(() => {
        gsap.fromTo(reviewTitle.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: reviewsSection.current,
                start: '-20% center',
                end: '-5% center',
                scrub: true,
            }
        });

        gsap.fromTo(reviewsSlider.current, {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
                trigger: reviewsSection.current,
                start: '-15% center',
                end: '-0% center',
                scrub: true,
            }
        });
    }, { scope: reviewsSection });

    return (
        <StyledReviewsSection
            id={id}
            ref={reviewsSection}
        >
            <StyledReviewTitle
                variant="h2"
                ref={reviewTitle}
            >
                Отзывы
            </StyledReviewTitle>
            <StyledReviewsSlider
                ref={reviewsSlider}
            >
                <Carousel
                    slides={
                        reviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                image={review.image}
                                name={review.title}
                                text={review.description}
                                date={review.date}
                            />
                        ))
                    }
                    options={OPTIONS}
                />
            </StyledReviewsSlider>
        </StyledReviewsSection>
    );
};

export default ReviewsSection;