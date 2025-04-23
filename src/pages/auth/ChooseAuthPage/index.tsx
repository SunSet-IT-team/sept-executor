import {Box, Button, Stack} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import {useStyles} from './styles';
import {BackLayout} from '../../layouts/BackLayout';
import {SlugPages} from '../../../app/routes/pages';

/**
 * Страница выбора точки входа
 */
export const ChooseAuthPage: FC = () => {
    const styles = useStyles();
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const isChoosed = searchParams.get('isChoosed');

    useEffect(() => {
        if (isChoosed) {
            navigate(`/${SlugPages.AUTH}`, {replace: true});
        }
    }, [isChoosed, navigate]);

    return (
        <>
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <BackLayout>
                <Stack gap={'20px'} sx={styles.container}>
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
                    <Button
                        variant="contained"
                        sx={{py: '17px', mt: '52px'}}
                        component={Link}
                        to={`/${SlugPages.AUTH}`}
                    >
                        Войти как исполнитель
                    </Button>
                    <Button
                        variant="contained"
                        sx={{py: '17px'}}
                        component="a"
                        href="https://eko-kontrol.ru/choose-auth?isChoosed=true"
                    >
                        Войти как заказчик
                    </Button>
                </Stack>
            </BackLayout>
        </>
    );
};
