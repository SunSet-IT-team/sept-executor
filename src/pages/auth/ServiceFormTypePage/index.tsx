import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {SelectFormTypeWidget} from '../../../widgets/SelectFormType';
import {useStyles} from './styles';
import {BackLayout} from '../../layouts/BackLayout';

export const ServiceFormTypePage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <BackLayout title="Регистрация">
                <SelectFormTypeWidget />
            </BackLayout>
        </>
    );
};
