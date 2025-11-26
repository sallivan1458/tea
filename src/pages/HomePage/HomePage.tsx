import GreetingSection from "../../sections/Greeting/GreetingSection.tsx";
import AdvantagesSection from "../../sections/Advantages/AdvantagesSection.tsx";
import ContactsSection from "../../sections/ContactsSection.tsx";
import QuestionsSection from "../../sections/QuestionsSection.tsx";
import GoodsSection from "../../sections/Goods/GoodsSection.tsx";
import ReviewsSection from "../../sections/Reviews/ReviewsSection.tsx";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {setActiveSection, setContentReady} from "../../store/gsapSlice.ts";
import {useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import {Container} from "@mui/material";
import AboutMeSection from "../../sections/AboutMeSection/AboutMeSection.tsx";
import {setLoading} from "../../store/LoadingState.ts";
import {scrollSections, SectionId} from "../../description.ts";


const HomePage = () => {
    const dispatch = useAppDispatch();
    const container = useRef(null);

    const isTouchDevice = useAppSelector(state => state.device.deviceType === "touchDevice");
    useGSAP(() => {
        dispatch(setContentReady(true));


        scrollSections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                if (id === 'contacts') {
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top bottom",
                        end: "top bottom",
                        onEnter: () => dispatch(setActiveSection(id)),
                        onEnterBack: () => dispatch(setActiveSection('questions')),
                    });
                } else {
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top center",
                        end: "bottom center",
                        onEnter: () => dispatch(setActiveSection(id)),
                        onEnterBack: () => dispatch(setActiveSection(id)),
                    });
                }
            }
        });

        return () => {
            dispatch(setContentReady(false));
        };

    }, {scope: container});

    useEffect(() => {
        dispatch(setLoading('ready'));
    }, [dispatch]);

    useEffect(() => {
        // Принудительно обновляем ScrollTrigger после монтирования и небольшой задержки
        const handleLoad = () => {
            // Небольшая задержка может помочь, но главное - дождаться загрузки ресурсов
            setTimeout(() => {
                console.log('Window loaded, refreshing ScrollTrigger');
                ScrollTrigger.refresh();
            }, 500); // 500ms задержки для надежности
        };

        // Можно использовать событие 'load' на window для гарантии загрузки всех ресурсов
        if (typeof window !== 'undefined') {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('load', handleLoad);
            }
        };
    }, []);

    return (
        <div ref={container} style={{
            padding: 0,
            margin: 0,
            boxSizing: 'border-box',
        }}>
            <GreetingSection id={SectionId.GREETING}/>
            <AboutMeSection id={SectionId.ABOUT_ME}/>
            <Container
                component="main"
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    overflowX: isTouchDevice ? 'hidden' : 'visible',
                }}
            >
                <AdvantagesSection id={SectionId.ADVANTAGES}/>
                <GoodsSection id={SectionId.GOODS}/>
                <ReviewsSection id={SectionId.REVIEWS}/>
                <QuestionsSection id={SectionId.QUESTIONS}/>
                <ContactsSection id={SectionId.CONTACTS}/>
            </Container>
        </div>
    );
};

export default HomePage;