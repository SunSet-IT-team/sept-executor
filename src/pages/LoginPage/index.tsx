import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../feature/PageTitle/PageTitle';
import {useStyles} from './styles';

export const LoginPage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <Box sx={styles.pageContainer}>
                <PageTitle title="Войти" />
            </Box>
        </>
    );
};
