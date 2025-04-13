import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../feature/PageTitle';
import {useStyles} from './styles';
import {LoginForm} from '../../widgets/LoginForm';

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
            <Box sx={styles.pageContainer}>
                <PageTitle title="Войти" sx={styles.title} />
                <Box sx={styles.content}>
                    <Box
                        component="img"
                        sx={styles.logo}
                        alt="Your logo"
                        src="/logo.png"
                    />
                    <LoginForm />
                </Box>
            </Box>
        </>
    );
};
