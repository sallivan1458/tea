import {Typography, Box, Tooltip} from '@mui/material';
import {contacts} from "../description.ts";

interface IContactsSectionProps {
    id: string
}

const ContactsSection = ({id}: IContactsSectionProps) => {

    return (
        <Box
            id={id}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '150px',
                pb: 'calc(var(--vh, 1vh) * 20)'
            }}>
            <Typography
                variant="h6"
                sx={{mb: 1}}
            >
                Связь со мной
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3,
                }}
            >
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
    );
};

export default ContactsSection;