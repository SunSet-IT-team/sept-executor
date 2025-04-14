import {FC, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {OtpField} from '../../shared/ui/inputs/OtpField';
import {useAppSelector} from '../../app/store/hook';
import {getUserRegisterData} from '../../entities/user/model/selectors';
import {userApi} from '../../entities/user/api';
import {SlugPages} from '../../app/routes/pages';

/**
 * Шаблон формы подтверждения кода
 */
export const ConfirmationForm: FC = () => {
    const {email} = useAppSelector(getUserRegisterData);
    const navigate = useNavigate();

    const {
        control,
        watch,
        setError,
        formState: {errors},
        clearErrors,
    } = useForm<{
        verificationСode: string;
    }>({
        defaultValues: {
            verificationСode: '',
        },
    });

    const code = watch('verificationСode');

    const handleChageCode = async () => {
        clearErrors('verificationСode');

        if (code.length !== 6) return;

        if (!email) {
            toast.error('Не указан email для сброса пароля');
            return;
        }

        try {
            const {data} = await userApi.verifyEmail({
                email,
                code,
            });

            if (!data.success) {
                const m = data.error || 'Ошибка сервера';
                toast.error(m);
                setError('verificationСode', {message: 'Неверный код'});
            }

            navigate(`/${SlugPages.LOGIN}`);
            toast.success('Email подтверждён');
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка авторизации';

            toast.error(message);
            setError('verificationСode', {message});
        }
    };

    useEffect(() => {
        handleChageCode();
    }, [code]);

    return (
        <form>
            <Controller
                name="verificationСode"
                control={control}
                rules={{validate: (value) => value.length === 6}}
                render={({field}) => (
                    <OtpField
                        field={field}
                        errorMessage={errors.verificationСode?.message}
                    />
                )}
            />
        </form>
    );
};
