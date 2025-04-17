import {FC} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {imageStyle, useStyles} from './styles';
import {ICustomer, IOrderWithReview} from '../../../pages/MyReviewsPage/data';
import {OrderReviewShort} from './OrderReviewShort';

interface IProps {
    order: IOrderWithReview;
    customer: ICustomer;
}

/**
 * Карточка отзыва пользователя небольшой с информацией о заказе
 * Экран - мои отзывы
 */
export const ReviewItem: FC<IProps> = ({order, customer}) => {
    const styles = useStyles();

    return (
        <Box>
            <Stack direction="row" spacing={2} alignItems="flex-start">
                {/* Левая часть — аватар */}
                <Box sx={styles.imageContainerStyle}>
                    <img src={customer.imgUrl} alt={``} style={imageStyle} />
                </Box>

                {/* Правая часть — текст */}
                <Box>
                    <Typography fontWeight={600}>{order.name}</Typography>
                    <Typography>
                        <Box component="span" fontWeight={600}>
                            Дата:
                        </Box>
                        {` ${order.date}`}
                    </Typography>
                    <Typography>
                        <Box component="span" fontWeight={600}>
                            Адрес:
                        </Box>
                        {` ${order.address}`}
                    </Typography>
                </Box>
            </Stack>
            <OrderReviewShort
                review_text={order.review.text}
                rating_score={order.review.rating}
            />
        </Box>
    );
};
