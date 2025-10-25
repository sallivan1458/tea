import {Typography, Box, Theme} from '@mui/material';
import { useState } from 'react';
import {alpha} from "@mui/material/styles";

export interface CardEducationProps {
    image: string;
    text?: string;
    title?: string;
}

export const CardEducation = ({
                                  image,
                                  title = 'заголовок',
                                  text = 'Текст поверх размытого фона'
                              }: CardEducationProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Box
            onClick={handleClick}
            sx={(theme:Theme) => ({
                height: '100%',
                width: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '16px',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: '0.4s ease-in-out',
                '&:hover': {
                    transform: 'scale(0.97)',
                    boxShadow: `0px 0px 16px ${alpha(theme.palette.primary.main, 0.8)}`,
                },
            })}
        >
            {/* Overlay контента */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'none',
                    borderRadius: '0px 0px 8px 8px',
                    padding: '1rem',
                    margin: 0,
                    opacity: isClicked ? 1 : 0,
                    transform: isClicked ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'all 0.9s ease-in-out',
                    overflow: 'hidden',
                    zIndex: 2,
                    height: 'auto',
                    transformOrigin: 'bottom center',
                }}
            >
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: 'bold',
                        position: 'relative',
                        zIndex: 3,
                        transform: isClicked ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isClicked ? 1 : 0,
                        transition: 'all 0.3s ease-in-out 0.1s',
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    variant='body1'
                    sx={{
                        position: 'relative',
                        zIndex: 3,
                        transform: isClicked ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isClicked ? 1 : 0,
                        transition: 'all 0.3s ease-in-out 0.2s',
                        mt: 1,
                    }}
                >
                    {text}
                </Typography>
            </Box>

            {/* Отдельный элемент для размытого фона - всегда видимый, но анимируется */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: isClicked ? '30%' : '0%',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    mask: 'linear-gradient(to top, black 0%, transparent 100%)',
                    WebkitMask: 'linear-gradient(to top, black 0%, transparent 100%)',
                    zIndex: 1,
                    transition: 'all 0.8s',
                    borderRadius: '0px 0px 8px 8px',
                }}
            />
        </Box>
    );
};