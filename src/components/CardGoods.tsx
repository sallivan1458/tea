import {useState} from 'react';
import {Typography, Box, IconButton, useMediaQuery} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export interface CardGoodsProps {
    image?: string;
    text?: string[];
    title?: string;
    price?: number;
}

export const CardGoods = ({
                              title = 'Standart',
                              text = ['индивидуальный подход'],
                              image = '',
                              price = 1500,
                          }: CardGoodsProps) => {
    const [expanded, setExpanded] = useState(false);

    const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');
    const isWidth900_1000 = useMediaQuery('(max-width:1000px) and (min-width:900px)');

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Box
            onClick={toggleExpanded}
            sx={{
                cursor: 'pointer',
                height: !isTouchDevice ? '500px' : '400px',
                minWidth: '240px',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                transition: '0.4s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                ...(!isTouchDevice && {
                    '&:hover': {
                        transform: 'scale(0.98)',
                        transition: '0.6s',
                    },
                }),
            }}
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
                    variant={isWidth900_1000? 'h6': 'h5'}
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
                    size={'small'}
                    disableRipple
                    sx={{
                        color: 'white',
                        backgroundColor: 'rgb(18,141,223)',
                        transform: `${!expanded ? 'rotate(0deg)' : `rotate(45deg)`}`,
                        transition: 'transform 0.5s ease-in-out 0.2s',
                        '&:hover': {
                            backgroundColor: 'rgb(14,66,124)',
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
                    zIndex: 20,
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
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            textAlign: 'left',
                            color: 'white',
                            mt: 0,
                        }}
                    >
                        {text.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    padding: '5px 0',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '6px',
                                        height: '6px',
                                        backgroundColor: 'primary.main',
                                        borderRadius: '50%',
                                        flexShrink: 0,
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                >
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};