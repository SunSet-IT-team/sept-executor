import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import {useStyles} from './styles';
import {BackLayout} from '../layouts/BackLayout';
import {MyReviewsList} from '../../widgets/MyReviewsList';
import {Box} from '@mui/material';

/**
 * Страница отзывов.
 * Экран - Личный кабинет: мои отзывы.
 */
const MyreviewsPage = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Мои отзывы</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <BackLayout title="Мои отзывы">
                        <Box sx={styles.container}>
                            <MyReviewsList reviews={[]} />
                        </Box>
                    </BackLayout>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default MyreviewsPage;
