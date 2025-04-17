import {FC} from 'react';
import {Box} from '@mui/material';
import {ReviewContent} from '../../../feature/ReviewContent';
import {ReviewTopInfo} from '../ReviewTopInfo';
import { IReview } from '../model/types';

interface IProps {
    review: IReview
}

/**
 * Карточка отзыва пользователя небольшой с информацией о заказе
 * Экран - личный кабинет: мои отзывы
 */
export const ReviewCard: FC<IProps> = ({review}) => {
    return (
        <Box>
            <ReviewTopInfo
                avatarUrl={review.order.customer.avatarUrl}
                customer_name={review.order.customer.name}
                order_date={review.order.date}
                order_address={review.order.address}
            />
            <ReviewContent
                rating_score={review.review.rating}
                review_text={review.review.text}
            />
        </Box>
    );
};
