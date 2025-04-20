import {FC} from 'react';
import {Box} from '@mui/material';
import {ReviewContent} from '../ReviewContent';
import {ReviewTopInfo} from '../ReviewTopInfo';
import {Review} from '../../../model/types';

interface IProps {
    review: Review;
}

/**
 * Карточка отзыва пользователя небольшой с информацией о заказе
 * Экран - личный кабинет: мои отзывы
 */
export const ReviewCard: FC<IProps> = ({review}) => {
    return (
        <Box>
            {review.author && (
                <ReviewTopInfo
                    avatarUrl={review.author.profileImage}
                    customerName={review.author.name}
                    orderDate={review.date}
                    orderAddress={''}
                />
            )}

            <ReviewContent
                ratingScore={review.rating}
                reviewText={review.text}
                name={review.author.name}
            />
        </Box>
    );
};
