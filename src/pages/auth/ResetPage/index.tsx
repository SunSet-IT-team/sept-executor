import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {useStyles} from './styles';
import {BackLayout} from '../../layouts/BackLayout';
import {ResetForm} from '../../../widgets/ResetForm';

/**
 * Страница сброса пароля
 */
export const ResetPage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Сброс пароля</title>
            </Helmet>
            <BackLayout title="Вход">
                <Box sx={styles.logoContainer}>
                    <Box
                        component="img"
                        sx={styles.logo}
                        alt="ЭКОКОНТРОЛЬ logo"
                        src="/logo.png"
                    />
                    <Box
                        component="img"
                        sx={styles.logoText}
                        alt="ЭКОКОНТРОЛЬ"
                        src="/logo_text.png"
                    />
                </Box>
                <ResetForm />
            </BackLayout>
        </>
    );
};
