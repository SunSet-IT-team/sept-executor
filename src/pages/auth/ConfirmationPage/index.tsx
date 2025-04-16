import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {toast} from 'react-toastify';
import {getUserRegisterData} from '../../../entities/user/model/selectors';
import {useAppSelector} from '../../../app/store/hook';
import {ConfirmationForm} from '../../../widgets/ConfirmationForm';
import {userApi} from '../../../entities/user/api';
import {BackLayout} from '../../layouts/BackLayout';

export const ConfirmationPage: FC = () => {
    const {email} = useAppSelector(getUserRegisterData);

    /**
     * Обновить код
     */
    const handleResendCode = async () => {
        if (!email) {
            toast.error('Почта не указана');
            return;
        }

        await userApi.resendCode({email});
        toast.success('Код выслан заново');
    };

    return (
        <>
            <Helmet>
                <title>Код подтверждения</title>
            </Helmet>
            <BackLayout>
                <Stack direction={'column'} gap={'25px'} my={'auto'}>
                    <Typography variant="body1" textAlign={'center'}>
                        Введите код подтверждения
                    </Typography>
                    <ConfirmationForm />
                    <Stack
                        direction={'row'}
                        gap={'5px'}
                        justifyContent={'center'}
                    >
                        <Typography variant="body2" textAlign={'center'}>
                            Не пришёл код?
                        </Typography>
                        <Typography
                            variant="body2"
                            textAlign={'center'}
                            onClick={handleResendCode}
                        >
                            Отправить ещё раз
                        </Typography>
                    </Stack>
                </Stack>
            </BackLayout>
        </>
    );
};
