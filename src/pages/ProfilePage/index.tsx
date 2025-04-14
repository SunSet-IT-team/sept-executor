import {ordersData} from '../OrdersPage/data';
import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import { ProfileFeatures } from '../../widgets/Profile/ProfileFeatures';
import { Box } from '@mui/material';
import { TechSupportBtn } from '../../feature/Profile/TechSupportBtn';
import { useStyles } from './styles';

/**
 * Страница профиля
 */
const ProfilePage = () => {
    const styles = useStyles()
    return (
        <>
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <Box sx={styles.container}>
                        <ProfileFeatures />
                        <TechSupportBtn />
                    </Box>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default ProfilePage;
