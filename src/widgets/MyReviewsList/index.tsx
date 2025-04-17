import {FC} from 'react';
import {Stack} from '@mui/material';
import {ReviewCard} from '../../entities/order/ui/review/ReviewCard';
import {useStyles} from './styles';
import {Review} from '../../entities/order/model/types';

interface IProps {
    reviews: Review[];
}

/**
 * Список отзывов пользователя.
 * Экран - Личный кабинет: мои отзывы.
 */
export const MyReviewsList: FC<IProps> = ({reviews}) => {
    const styles = useStyles();

    return (
        <Stack spacing={'45px'} sx={styles.root}>
            {reviews.map((review, i) => {
                return <ReviewCard key={review.id} review={review} />;
            })}
        </Stack>
    );
};
