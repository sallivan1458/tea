import React from 'react';
import {Drawer, Box, IconButton, List, ListItem, ListItemText, Tooltip} from '@mui/material';
import {Close} from '@mui/icons-material';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {closeDrawer} from './../../store/drawerSlice';
import {gsap} from "gsap";
import {buttons, contacts} from "../../description.ts";

const TopDrawer: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.drawer.isOpen);

    const handleClose = () => {
        dispatch(closeDrawer());
    };



    const handleNavigation = (targetId: string) => {
        // Здесь можно добавить логику навигации
        gsap.to(window, {
            duration: 0.3,
            scrollTo: {
                y: `#${targetId}`,
                offsetY: 200
            },
            ease: 'power2.out'
        });
        handleClose(); // Закрываем drawer после клика
    };

    // const handleContactClick = (url: string) => {
    //     window.open(url, '_blank');
    // };

    return (
        <Drawer
            anchor="top"
            open={isOpen}
            onClose={handleClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '100%',
                    height: '85vh', // Полная высота экрана
                    background: 'rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(20px)',
                    color: 'white',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                },
            }}
        >
            <Box
                sx={{
                    padding: 3,
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Распределяем пространство
                }}
            >
                {/* Кнопка закрытия */}
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: 16,
                        color: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.2)',
                        },
                        zIndex: 10,
                    }}
                >
                    <Close/>
                </IconButton>

                {/* Основная навигация */}
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingLeft: 2,
                }}>

                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width:'100%',
                        padding: 0,
                        justifyContent: 'flex-start',
                    }}>
                        {buttons.map((item) => (
                            <ListItem
                                key={item.title}
                                onClick={() => handleNavigation(item.targetId)}
                                sx={{
                                    cursor: 'pointer',
                                    margin: '4px 0',
                                    backgroundColor: 'none',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateX(4px)',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={item.title}
                                    sx={{
                                        textAlign: 'left',
                                        '& .MuiListItemText-primary': {
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                        }
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Контакты внизу */}
                <Box sx={{
                    marginTop:'auto',
                    padding: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3,

                    flexWrap: 'wrap',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                }}>
                    {contacts.map(({icon: Icon, title, action, color}) => (
                        <Tooltip key={title} title={title} arrow>
                            <Icon
                                fontSize="large"
                                onClick={action}
                                sx={{
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.2)',
                                        color: color,
                                    }
                                }}
                            />
                        </Tooltip>
                    ))}
                </Box>
            </Box>
        </Drawer>
    );
};

export default TopDrawer;