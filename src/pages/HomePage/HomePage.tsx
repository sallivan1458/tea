import GreetingSection from "../../sections/Greeting/GreetingSection.tsx";
import EducationSection from "../../sections/Education/EducationSection.tsx";
import AdvantagesSection from "../../sections/Advantages/AdvantagesSection.tsx";
import ContactsSection from "../../sections/ContactsSection.tsx";
import QuestionsSection from "../../sections/QuestionsSection.tsx";
import GoodsSection from "../../sections/Goods/GoodsSection.tsx";
import ReviewsSection from "../../sections/Reviews/ReviewsSection.tsx";
import {useAppDispatch} from "../../store/store.ts";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {setActiveSection, setContentReady} from "../../store/gsapSlice.ts";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";



const HomePage = () => {
    const dispatch = useAppDispatch();
    const container = useRef(null);

    useGSAP(() => {
        dispatch(setContentReady(true));

        const sections = [
            'greeting', 'education', 'advantages',
            'goods', 'reviews', 'questions', 'contacts'
        ];

        sections.forEach(id => {
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

    }, { scope: container });

    return (
        <div ref={container} style={{
            padding: 0,
            margin: 0,
            minHeight: '250vh',
            boxSizing: 'border-box',
        }}>
            <GreetingSection id="greeting"/>
            <EducationSection id="education"/>
            <AdvantagesSection id="advantages"/>
            <GoodsSection id="goods"/>
            <ReviewsSection id="reviews"/>
            <QuestionsSection id="questions"/>
            <ContactsSection id="contacts"/>
        </div>
    );
};

export default HomePage;