import {FC} from 'react';
import {Stack} from '@mui/material';
import {ReviewItem} from './ReviewCard';
import {IOrderWithReviewData} from '../../pages/MyReviewsPage/data';

interface IProps {
    orders: IOrderWithReviewData[];
}

/**
 * Список отзывов пользователя.
 * Экран - мои отзывы
 */
export const MyReviewsList: FC<IProps> = ({orders}) => {

    return (
        <Stack spacing={'45px'} mt={'35px'} px={'20px'}>
            {orders.map(({customer, orderWithReview}) => {
                return (
                    <ReviewItem order={orderWithReview} customer={customer} />
                );
            })}
        </Stack>
    );
};
