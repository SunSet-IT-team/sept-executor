import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import {useStyles} from './styles';
import {Box} from '@mui/material';
import {useAppSelector} from '../../app/store/hook';
import {getCurrentUser} from '../../entities/user/model/selectors';
import {useFetchReviews} from '../../entities/order/model/query/useFetchReviews';
import InfinityList from '../../feature/InfinityList';
import {ReviewCard} from '../../entities/order/ui/review/ReviewCard';
import {BackLayout} from '../layouts/BackLayout';

/**
 * Страница отзывов.
 * Экран - Личный кабинет: мои отзывы.
 */
const MyreviewsPage = () => {
    const styles = useStyles();
    const user = useAppSelector(getCurrentUser);
    const {reviews, isLoading, ref} = useFetchReviews(Number(user.id));

    return (
        <>
            <Helmet>
                <title>Мои отзывы</title>
            </Helmet>
            <BackLayout title="Мои отзывы">
                <NavLayout>
                    <Box sx={styles.container}>
                        <InfinityList
                            observedRef={ref}
                            isLoading={isLoading}
                            titleNoLength="Отзывы не найдены"
                        >
                            {reviews &&
                                reviews.map((review) => (
                                    <ReviewCard
                                        key={review.id}
                                        review={review}
                                    />
                                ))}
                        </InfinityList>
                    </Box>
                </NavLayout>
            </BackLayout>
        </>
    );
};

export default MyreviewsPage;
