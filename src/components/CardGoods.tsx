import {useState} from 'react';
import {Typography, Box, IconButton, useMediaQuery} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {CardGoodsProps} from "../description.ts";

interface CardGoodsExtendedProps extends CardGoodsProps {
    isCentered?: boolean;
}

export const CardGoods = ({
                              title = 'Standard',
                              text = ['индивидуальный подход'],
                              image = '',
                              price = 1500,
                              isCentered = false, // Новый пропс
                          }: CardGoodsExtendedProps) => {
    const [expanded, setExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');
    const isWidth900_1000 = useMediaQuery('(max-width:1000px) and (min-width:900px)');
    const isMobile = useMediaQuery('(max-width:600px)');

    // Для мобильных: используем isCentered вместо isHovered
    const shouldGlow = isMobile ? isCentered : isHovered;

    const toggleExpanded = () => {
        if (!isTouchDevice) {
            setExpanded(!expanded);
        } else {
            setExpanded(!expanded);
            setIsHovered(!isHovered);
        }
    };

    const ELECTRIC_COLORS = {
        __border__: 'rgba(255,170,59,0.6)',
        __border2__: 'rgba(255,170,59,0.8)',
        __lightning__: 'rgba(255,170,59,1)',
        __fog__: 'rgba(255,170,59,0.8)',
        __fog2__: 'rgba(255,170,59,0.8)',
    };


    return (
        <>
            {/* Эффект подсветки - показываем только когда shouldGlow true */}
            <Box
                sx={{
                    position: 'absolute',
                    height: !isTouchDevice ? '500px' : '400px',
                    width: '100%',
                    borderRadius: '16px',
                    transition: 'opacity 0.3s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: shouldGlow ? '1' : '0',
                    zIndex: 100,
                    pointerEvents: 'none',
                }}
            >
                {/* Фоновое свечение */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '16px',
                        filter: 'blur(12px)',
                        transform: shouldGlow ? `scale(1.02)` : `scale(0.85)`,
                        transition: 'transform 0.3s ease-in-out',
                        opacity: 0.45,
                        zIndex: 1,
                        background: `linear-gradient(-30deg,
                ${ELECTRIC_COLORS.__fog__},
                transparent 30%,
                transparent 70%,
                ${ELECTRIC_COLORS.__fog2__})`,
                    }}
                />
            </Box>


            <Box
                onClick={toggleExpanded}
                onMouseEnter={() => {
                    if (!isTouchDevice) setIsHovered(true)
                }}
                onMouseLeave={() => {
                    if (expanded) return
                    if (!isTouchDevice) setIsHovered(false)
                }}
                sx={{
                    cursor: 'pointer',
                    height: !isTouchDevice ? '500px' : '400px',
                    minWidth: '240px',
                    borderRadius: '16px',
                    position: 'relative',
                    transition: '0.4s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    // Для мобильных: добавляем трансформацию для центральной карточки
                    transform: isMobile && isCentered ? 'scale(0.98)' : 'scale(1)',
                    ...(!isTouchDevice && {
                        '&:hover': {
                            transform: 'scale(0.98)',
                            transition: '0.6s',
                        },
                    }),
                }}
            >
                {/* Граница подсветки */}
                {shouldGlow && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            border: `1px solid ${ELECTRIC_COLORS.__border__}`,
                            borderRadius: '16px',
                            filter: 'blur(2px)',
                            zIndex: 5,
                        }}
                    />
                )}

                {/* Остальной код карточки остается без изменений */}
                {/* Фоновое изображение */}
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1,
                    }}
                />

                {/* Градиентное наложение */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.9) 90%)',
                        zIndex: 2,
                        mask: 'radial-gradient(circle, transparent 40%, black 90%)',
                        WebkitMask: 'radial-gradient(circle, transparent 40%, black 90%)',
                    }}
                />

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
                    <Typography
                        variant={isWidth900_1000 ? 'h6' : 'h5'}
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

                    <IconButton
                        size={'small'}
                        disableRipple
                        sx={{
                            color: 'white',
                            backgroundColor: 'rgb(18,141,223)',
                            '&:hover': {
                                backgroundColor: 'rgb(14,66,124)',
                            },
                        }}
                    >
                        <AddIcon
                            sx={{
                                transform: !expanded ? 'rotate(0deg)' : 'rotate(135deg)',
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        />
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
                                    <Typography variant="body2">
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};