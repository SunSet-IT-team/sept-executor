import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {toast} from 'react-toastify';
import {getUserRegisterData} from '../../entities/user/model/selectors';
import {useAppSelector} from '../../app/store/hook';
import {ConfirmationForm} from '../../widgets/ConfirmationForm';
import {PageTitle} from '../../feature/PageTitle';
import {userApi} from '../../entities/user/api';

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

        const data = await userApi.resendCode({email});
        console.log(data);
        toast.success('Код выслан заново');
    };

    return (
        <>
            <Helmet>
                <title>Код подтверждения</title>
            </Helmet>
            <Box
                position={'relative'}
                py={'26px'}
                px={'33px'}
                minHeight={'100dvh'}
                display={'flex'}
                flexDirection={'column'}
            >
                <PageTitle title="Код подтверждения" />
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
            </Box>
        </>
    );
};
