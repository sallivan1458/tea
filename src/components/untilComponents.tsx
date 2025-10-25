import {alpha, Box, BoxProps, SxProps, Theme} from "@mui/material";
import { ReactNode} from 'react';


interface HighlightedBoxProps extends BoxProps {
    children: ReactNode;
    sx?: SxProps<Theme>;
}

export const HighlightedBox = ({ children, sx = {}, ...props }: HighlightedBoxProps) => {
    return (
        <Box
            sx={[
                (theme: Theme) => ({
                    backgroundColor: alpha(
                        theme.palette.mode === 'dark'
                            ? theme.palette.primary.dark
                            : theme.palette.primary.light,
                        0.1
                    ),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                    borderRadius: '8px',
                    padding: '16px',
                }),
                ...(Array.isArray(sx) ? sx : [sx])
            ]}
            {...props}
        >
            {children}
        </Box>
    );
};