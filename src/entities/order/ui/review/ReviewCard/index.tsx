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
            {/* <ReviewTopInfo
                avatarUrl={review.order.customer.avatarUrl}
                customerName={review.order.customer.name}
                orderDate={review.order.date}
                orderAddress={review.order.address}
            /> */}
            <ReviewContent
                ratingScore={review.rating}
                reviewText={review.text}
            />
        </Box>
    );
};
