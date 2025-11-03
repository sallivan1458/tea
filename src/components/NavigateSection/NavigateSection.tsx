import {useRef, useEffect, useCallback} from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import MenuIcon from "@mui/icons-material/Menu";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {
    StyledAppBar,
    StyledBoxContainer,
    StyledToolbarWrapper,
    StyledToolbar,
    StyledNavButton,
    StyledIconButton,
} from './Styled.tsx';
import {toggleDrawer} from "../../store/drawerSlice.ts";

gsap.registerPlugin(ScrollToPlugin);

export interface INavigateButton {
    title: string;
    targetId: string;
}

function NavigateSection() {
    const buttons: INavigateButton[] = [
        { title: 'TEA', targetId: 'greeting' },
        { title: 'EDUCATION', targetId: 'education' },
        { title: 'ADVANTAGES', targetId: 'advantages' },
        { title: 'GOODS', targetId: 'goods' },
        { title: 'REVIEWS', targetId: 'reviews' },
        { title: 'QUESTIONS', targetId: 'questions' },
        { title: 'CONTACTS', targetId: 'contacts' },
    ];

    const dispatch = useAppDispatch();
    const activeSection = useAppSelector(state => state.gsapState.activeSection);

    const isMobile = useMediaQuery('(max-width:900px)');
    const buttonRef = useRef<HTMLButtonElement>(null);

    const indicatorRef = useRef(null); // Ref для нашего индикатора
    const navButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const ctx = useRef<gsap.Context>();

    useEffect(() => {
        ctx.current = gsap.context(() => {});
        return () => ctx.current?.revert();
    }, []);


    const handleScrollToSection = useCallback((targetId: string) => {
        gsap.to(window, {
            duration: 0.3,
            scrollTo: {
                y: `#${targetId}`,
                offsetY: 200
            },
            ease: 'power2.out'
        });
    }, []);




    const handleOpenDrawer = () => {
        dispatch(toggleDrawer());
    };


    useEffect(() => {
        if (!ctx.current || !indicatorRef.current) return;

        ctx.current.add(() => {
            if (!activeSection) {
                // Плавное скрытие индикатора когда нет активной секции
                gsap.to(indicatorRef.current, {
                    duration: 0.3,
                    width: 0,
                    opacity: 0,
                    ease: "power2.out"
                });
                return;
            }

            const activeButton = navButtonsRef.current.find(
                (btn) => btn && btn.id === `nav-${activeSection}`
            );

            if (activeButton) {
                const { offsetLeft, offsetWidth } = activeButton;
                const targetWidth = offsetWidth * 0.25;
                const targetX = offsetLeft + (offsetWidth / 2) - (targetWidth / 2);

                // Анимация индикатора
                gsap.to(indicatorRef.current, {
                    x: targetX,
                    width: targetWidth,
                    opacity: 1,
                    height: '0.5px',
                    ease: "power2.out",
                    duration: 0.3,
                    transformOrigin: "center center",
                    onComplete: () => {
                        // Плавное увеличение высоты после перемещения
                        gsap.to(indicatorRef.current, {
                            duration: 0.2,
                            height: '2px',
                            ease: "power1.out"
                        });
                    }
                });
            }
        });
    }, [activeSection]);



    useEffect(() => {
        if (!ctx.current || !indicatorRef.current) return;

        ctx.current.add(() => {
            gsap.set(indicatorRef.current, {
                x: '30px',
                width: 0,
                height: '2px',
                opacity: 0
            });
        });
    }, []);

    return (
        <StyledAppBar position="fixed">
            <StyledBoxContainer>
                <StyledToolbarWrapper>
                    <StyledToolbar disableGutters>
                        {!isMobile ? (
                            <>
                                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 0 }}>
                                    {buttons.map((button: INavigateButton, index) => (
                                        <StyledNavButton
                                            key={index}
                                            ref={(el) => (navButtonsRef.current[index] = el)}
                                            id={`nav-${button.targetId}`}
                                            variant="text"
                                            color="primary"
                                            size="small"
                                            sx={{
                                                position: 'relative',
                                                color: activeSection === button.targetId ? 'secondary.main' : 'primary.main',
                                                transition: 'all 0.3s ease-in-out',
                                            }}
                                            onClick={() => handleScrollToSection(button.targetId)}
                                        >
                                            {button.title}
                                        </StyledNavButton>
                                    ))}
                                    <Box
                                        ref={indicatorRef}
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            backgroundColor: 'rgba(255,255,255,0.8)',
                                            boxShadow: '0 -1px 8px 2px rgba(255, 255, 255, 1)',
                                            borderRadius: '8px',
                                            pointerEvents: 'none',
                                            transition:'width 0.3s height 0.3s'
                                        }}
                                    />
                                </Box>


                            </>
                        ) : (
                            <>
                                <Box sx={{
                                    flexGrow: 1,
                                    zIndex:'20 !important'
                                }}>
                                    <StyledIconButton
                                        ref={buttonRef}
                                        onClick={handleOpenDrawer}
                                        aria-label="menu"
                                        size="small"
                                    >
                                        <MenuIcon />
                                    </StyledIconButton>
                                </Box>
                            </>
                        )}
                    </StyledToolbar>
                </StyledToolbarWrapper>
            </StyledBoxContainer>

        </StyledAppBar>
    );
}

export default NavigateSection;