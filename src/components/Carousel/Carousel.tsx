import React, {ReactNode} from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './CarouselArrowsButtons.tsx'
import useEmblaCarousel from 'embla-carousel-react'
import {
    EmblaContainer,
    EmblaViewport,
    EmblaContainerInner,
    EmblaSlide,
    EmblaSlideContent,
    EmblaControls,
    EmblaButtons
} from './Styled'

type PropType = {
    slides: ReactNode[]
    options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)


    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <EmblaContainer>
            <EmblaViewport ref={emblaRef}>
                <EmblaContainerInner>
                    {slides.map((slide,index) => (
                        <EmblaSlide key={index}>
                            <EmblaSlideContent>
                                {slide}
                            </EmblaSlideContent>
                        </EmblaSlide>
                    ))}
                </EmblaContainerInner>
            </EmblaViewport>

            <EmblaControls>
                <EmblaButtons>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </EmblaButtons>
            </EmblaControls>
        </EmblaContainer>
    )
}

export default Carousel