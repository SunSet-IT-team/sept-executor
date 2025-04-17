import {FC} from 'react';
import {Stack} from '@mui/material';
import {ReviewCard} from '../../entities/review/ReviewCard';
import {IReview} from '../../entities/review/model/types';
import { useStyles } from './styles';

interface IProps {
    reviews: IReview[];
}

/**
 * Список отзывов пользователя.
 * Экран - Личный кабинет: мои отзывы.
 */
export const MyReviewsList: FC<IProps> = ({reviews}) => {
    const styles = useStyles()

    return (
        <Stack spacing={'45px'} sx={styles.root}>
            {reviews.map((review, i) => {
                return <ReviewCard key={`${i}_${review.review.text}`} review={review} />;
            })}
        </Stack>
    );
};
