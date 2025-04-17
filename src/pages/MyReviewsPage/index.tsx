import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import {useStyles} from './styles';
import {BackLayout} from '../layouts/BackLayout';
import {StatisticPanel} from '../../widgets/StatisticPanel';
import { MyReviewsList } from '../../widgets/MyReviewsList';
import { reviewsData } from './data';
/**
 * Страница отзывов
 */
const MyreviewsPage = () => {
    const styles = useStyles();
    return (
        <>
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <BackLayout title="Мои отзывы">
                        <MyReviewsList orders={reviewsData}/>    
                    </BackLayout>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default MyreviewsPage;
