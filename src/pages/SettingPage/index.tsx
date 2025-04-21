import {Helmet} from 'react-helmet-async';
import {BackLayout} from '../layouts/BackLayout';
import {RegistrationForm} from '../../widgets/RegistrationForm';
import {SettingForm} from '../../widgets/SettingForm';

/**
 * Страница со всеми настройками
 */
const SettingPage = () => {
    return (
        <>
            <Helmet>
                <title>Настройки</title>
            </Helmet>
            <BackLayout title="Настройки">
                <SettingForm />
            </BackLayout>
        </>
    );
};

export default SettingPage;
