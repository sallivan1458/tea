import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { StyledReviewsSection, StyledReviewTitle, StyledReviewsSlider } from './Styled';


import Carousel from "components/Carousel/Carousel.tsx";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import ReviewCard from "components/CardReview/CardReview.tsx";
import {useMediaQuery} from "@mui/material";
import {reviews} from "../../description.ts";

gsap.registerPlugin(ScrollTrigger);

export interface IReview {
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
    const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');



    useGSAP(() => {
        gsap.fromTo(reviewTitle.current, {
            opacity: 0,
            x: '250'
        }, {
            opacity: 1,
            x: 0,
            duration:'1',
            ease: "power4.out",
            scrollTrigger: {
                trigger: reviewsSection.current,
                start: '-20% center',
                end: '-5% center',
                scrub: !isTouchDevice,
            }
        });

        gsap.fromTo(reviewsSlider.current, {
            opacity: 0,
            x:'-250',
        }, {
            duration:'1',
            opacity: 1,
            x:'0',
            ease: "power4.out",
            scrollTrigger: {
                trigger: reviewsSection.current,
                start: '-25% center',
                end: '-0% center',
                scrub: !isTouchDevice,
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