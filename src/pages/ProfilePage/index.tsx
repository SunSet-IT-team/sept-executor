import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import { ProfileFeaturesList } from '../../widgets/Profile/ProfileFeaturesList';
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
                        <ProfileFeaturesList />
                        <TechSupportBtn />
                    </Box>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default ProfilePage;
