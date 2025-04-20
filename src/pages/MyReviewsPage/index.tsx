import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import {useStyles} from './styles';
import {BackLayoutProfile} from '../layouts/BackLayoutProfile';
import {Box} from '@mui/material';
import {useAppSelector} from '../../app/store/hook';
import {getCurrentUser} from '../../entities/user/model/selectors';
import {useFetchReviews} from '../../entities/order/model/query/useFetchReviews';
import InfinityList from '../../feature/InfinityList';
import {ReviewCard} from '../../entities/order/ui/review/ReviewCard';

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
            <ProfileLayout>
                <NavLayout>
                    <BackLayoutProfile title="Мои отзывы">
                        <Box sx={styles.container}>
                            <InfinityList
                                observedRef={ref}
                                isLoading={isLoading}
                                titleNoLength="Заказы не найдены"
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
                    </BackLayoutProfile>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default MyreviewsPage;
