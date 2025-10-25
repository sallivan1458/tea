import {Typography, Box} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';


interface IContactsSectionProps {
    id:string
}

const ContactsSection = ({id}:IContactsSectionProps) => {
    // const сontactSection = useRef(null)
    // const contactTitle = useRef(null)


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
                pb:'20vh'
            }}>
            <Typography
                variant="h6"
                sx={{mb:1}}
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
                <WhatsAppIcon
                    fontSize="large"
                    sx={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            color: '#25D366',
                        }
                    }}
                />

                <TelegramIcon
                    fontSize="large"
                    sx={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            color: '#0088cc',
                        }
                    }}
                />

                <InstagramIcon
                    fontSize="large"
                    sx={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            color: '#E1306C',
                        }
                    }}
                />

                <MailIcon
                    fontSize="large"
                    sx={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            color: '#eadb35',
                        }
                    }}
                />
            </Box>
        </Box>
    );
};

export default ContactsSection;