import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../feature/PageTitle';
import {SelectFormTypeWidget} from '../../widgets/SelectFormType';
import {useStyles} from './styles';

export const ServiceFormTypePage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <Box sx={styles.pageContainer}>
                <PageTitle title="Регистрация" />
                <SelectFormTypeWidget />
            </Box>
        </>
    );
};
