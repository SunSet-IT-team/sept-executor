import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../../feature/PageTitle';
import {useStyles} from './styles';
import {LoginForm} from '../../../widgets/LoginForm';
import {BackLayout} from '../../layouts/BackLayout';

/**
 * Страница логина
 */
export const LoginPage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <BackLayout title="Вход">
                <Box
                    component="img"
                    sx={styles.logo}
                    alt="Your logo"
                    src="/logo.png"
                />
                <LoginForm />
            </BackLayout>
        </>
    );
};
