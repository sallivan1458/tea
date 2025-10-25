import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import { setErrorMessage, setIsErrorWindowOpen } from "../../store/ModalWindows.ts";
import { memo, useEffect, useRef } from "react";
import {
    Modal,
    Paper,
    Typography,
    IconButton,
    styled,
    keyframes,
    Theme
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { alpha } from "@mui/material/styles";

const fadeIn = keyframes`
    0% {
        left: 30%;
        opacity: 0;
        bottom: -100px;
        width: 220px;
    }
    5% {
        left: 50%;
        opacity: 1;
        bottom: 30px;
        width: 250px;
    }
    95% {
        left: 50%;
        opacity: 1;
        bottom: 30px;
        width: 250px;
    }
    100% {
        left: 80%;
        opacity: 0;
        bottom: -100px;
        width: 220px;
    }
`;

const fadeInText = keyframes`
    0% {
        font-size: 13px;
    }
    5% {
        font-size: 15px;
    }
    95% {
        font-size: 15px;
    }
    100% {
        font-size: 13px;
    }
`;

const AnimatedPaper = styled(Paper)(({ theme }: { theme: Theme }) => ({
    position: 'fixed',
    left: '50%',
    bottom: '-100px',
    transform: 'translateX(-50%)',
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight: '100px',
    width: '220px',
    border: '2px solid',
    borderColor: theme.palette.error.main,
    borderRadius: '10px',
    boxShadow: `0 0 3px ${theme.palette.error.main}`,
    animation: `${fadeIn} 5s ease-in-out`,
    padding: theme.spacing(1),
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
    backdropFilter: 'blur(5px)',
    pointerEvents: 'auto',
}));

const ErrorText = styled(Typography)(({ theme }: { theme: Theme }) => ({
    animation: `${fadeInText} 5s ease-in-out`,
    letterSpacing: '0.6px',
    fontSize: '13px',
    fontWeight: 'bold',
    color: theme.palette.error.main,
}));

const CloseButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
    position: 'absolute',
    right: '15px',
    top: '5px',
    fontSize: '20px',
    color: theme.palette.error.main,
}));

const ModalErrorWindow = memo(() => {
    const dispatch = useAppDispatch();
    const isErrorOpen = useAppSelector(state => state.modalWindowSlice.isErrorOpen);
    const errorMessage = useAppSelector(state => state.modalWindowSlice.errorMessage);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (isErrorOpen) {
            timerRef.current = setTimeout(() => {
                dispatch(setIsErrorWindowOpen(false));
            }, 5000);
        }
        return () => {
            if (timerRef.current) {
                dispatch(setErrorMessage(''));
                clearTimeout(timerRef.current);
            }
        };
    }, [isErrorOpen, errorMessage, dispatch]);

    const handleClose = () => {
        dispatch(setIsErrorWindowOpen(false));
        dispatch(setErrorMessage(''));
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    return (
        <Modal
            open={isErrorOpen}
            onClose={handleClose}
            sx={{
                backdropFilter: 'blur(10px)',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                top: 'auto',
                pointerEvents: 'none',
            }}
            disableScrollLock={true}
            disableEnforceFocus={true}
            disableAutoFocus={true}
            hideBackdrop={true}
        >
            <AnimatedPaper
            >
                <CloseButton
                    size="small"
                    onClick={handleClose}
                    aria-label="close"
                >
                    <CloseIcon fontSize="small" />
                </CloseButton>
                <ErrorText variant="body2">
                    {errorMessage}
                </ErrorText>
            </AnimatedPaper>
        </Modal>
    );
});

export default ModalErrorWindow;