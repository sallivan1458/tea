import {useState} from 'react';
import {Typography, Box, Theme, IconButton} from '@mui/material';
import {alpha} from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';

export interface CardGoodsProps {
    image?: string;
    text?: string;
    title?: string;
    price?: number;
}

export const CardGoods = ({
                              title = 'Standart',
                              text = 'индивидуальный подход',
                              image = '',
                              price = 1500,
                          }: CardGoodsProps) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Box
            onClick={toggleExpanded}
            sx={(theme: Theme) => ({
                cursor: 'pointer',
                height: '300px',
                minWidth: '240px',
                backgroundColor: 'rgba(0,0,0,0.4)',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                transition: '0.4s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    boxShadow: `0px 0px 6px ${alpha(theme.palette.primary.main, 0.8)}`,
                },
            })}
        >
            {/* Фоновое изображение с круговым размытием */}
            {image && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            zIndex: 1,
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.9) 90%)',
                            zIndex: 2,
                            mask: 'radial-gradient(circle, transparent 40%, black 90%)',
                            WebkitMask: 'radial-gradient(circle, transparent 40%, black 90%)',
                        }
                    }}
                />
            )}

            {/* Верхняя часть с заголовком и кнопкой */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 20,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '16px 16px 0 16px',
                }}
            >
                {/* Заголовок */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 2px 4px rgba(0,0,0,0.8)',
                        margin: 0,
                        lineHeight: 1.2,
                        maxWidth: 'calc(100% - 48px)',
                    }}
                >
                    {title}
                </Typography>

                {/* Кнопка плюсика */}
                <IconButton
                    disableRipple
                    sx={{
                        color: 'white',
                        backgroundColor: 'rgb(38,38,38)',
                        transform: `${!expanded ? 'rotate(0deg)' : `rotate(45deg)`}`,
                        transition: 'transform 0.5s ease-in-out 0.2s',
                        '&:hover': {
                            backgroundColor: 'rgb(48,48,48)',
                        },
                    }}
                >
                    <AddIcon/>
                </IconButton>
            </Box>

            {/* Основной контент карточки */}
            <Box
                sx={{
                    padding: '24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '16px',
                    position: 'relative',
                    zIndex: 3,
                    marginTop: '-12px',
                }}
            >
                {/* Цена */}
                <Typography
                    variant="h6"
                    sx={{
                        color: 'primary.main',
                        fontWeight: 'bold',
                        textShadow: '0px 2px 4px rgba(0,0,0,0.8)',
                    }}
                >
                    {price} руб.
                </Typography>
            </Box>

            {/* Наложение с описанием */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: '0',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderRadius: '16px',
                    padding: '0',
                    opacity: expanded ? 1 : 0,
                    visibility: expanded ? 'visible' : 'hidden',
                    transition: 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',
                    zIndex: 10,
                    overflowY: 'auto',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        padding: '32px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'justify',
                            color: 'white',
                            mt: 6,
                        }}
                    >
                        {text}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};