import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../../feature/PageTitle';
import {RegistrationForm} from '../../../widgets/RegistrationForm';
import {useStyles} from './styles';
import {BackLayout} from '../../layouts/BackLayout';

export const RegistrationPage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <BackLayout title="Регистрация">
                <RegistrationForm />
            </BackLayout>
        </>
    );
};
