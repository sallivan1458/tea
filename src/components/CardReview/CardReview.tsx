import React from 'react';
import {
    Typography, useMediaQuery, useTheme,
} from '@mui/material';
import {
    ReviewAvatar,
    ReviewContent,
    ReviewHeader,
    ReviewText,
    StyledCard,
    ReviewInfo,
    DateContainer
} from "components/CardReview/Styled.tsx";

interface ReviewCardProps {
    image: string;
    name: string;
    text: string;
    date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
                                                   image,
                                                   name,
                                                   text,
                                                   date
                                               }) => {

    const formatDate = (date?: string) =>
        date ? new Date(+date).toLocaleDateString('ru-RU').replace(/\//g, '.') : '';


    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <StyledCard>
            <ReviewHeader>
                <ReviewInfo>
                    <Typography variant="h3" component="h3" fontWeight="bold">
                        {name}
                    </Typography>
                </ReviewInfo>
                <ReviewAvatar
                    src={image}
                    alt={name}
                />
            </ReviewHeader>

            <ReviewContent>
                <ReviewText variant={isSmScreen ? "h6" : "h5"}>
                    {text}
                </ReviewText>
            </ReviewContent>

            <DateContainer>
                <Typography variant="h6" color="text.secondary">
                    {formatDate(date)}
                </Typography>
            </DateContainer>
        </StyledCard>
    );
};

export default ReviewCard;