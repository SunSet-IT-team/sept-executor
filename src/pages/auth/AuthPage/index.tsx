import {Box, Button} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useStyles} from './styles';
import {SlugPages} from '../../../app/routes/pages';
import {BackLayout} from '../../layouts/BackLayout';

export const AuthPage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <BackLayout>
                <Box
                    component="img"
                    sx={styles.logo}
                    alt="Your logo"
                    src="/logo.png"
                />
                <Button
                    variant="contained"
                    sx={styles.firstBtn}
                    component={Link}
                    to={`/${SlugPages.LOGIN}`}
                >
                    Войти
                </Button>
                <Button
                    variant="contained"
                    sx={styles.secondBtn}
                    component={Link}
                    to={`/${SlugPages.REGISTER_CHOOSE_FORM}`}
                >
                    Зарегистрироваться
                </Button>
            </BackLayout>
        </>
    );
};
