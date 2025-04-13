import {Box, Button, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useStyles} from './styles';

export const AuthPage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <Box sx={styles.pageContainer}>
                <Stack gap={'20px'}>
                    <Typography variant="h1" sx={styles.label}>
                        ЭКО Контроль
                    </Typography>
                    <Button
                        variant="contained"
                        sx={styles.firstBtn}
                        component={Link}
                        to="/login"
                    >
                        Войти
                    </Button>
                    <Button
                        variant="contained"
                        sx={styles.secondBtn}
                        component={Link}
                        to="/register/choose-form"
                    >
                        Зарегистрироваться
                    </Button>
                </Stack>
            </Box>
        </>
    );
};
