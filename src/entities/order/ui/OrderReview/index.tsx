import {Box, Typography} from '@mui/material';
import {Review} from '../../model/types';
import {ReviewContent} from '../review/ReviewContent';

type OrderReviewProps = {
    review: Review;
};

/**
 * Отзыв клиента
 */
const OrderReview = ({review}: OrderReviewProps) => {
    return (
        <Box>
            <Typography variant="h6" textAlign="center">
                Отзыв клиента
            </Typography>
            <ReviewContent
                ratingScore={review.rating}
                reviewText={review.text}
                name={review.author.name}
            />
        </Box>
    );
};

export default OrderReview;
