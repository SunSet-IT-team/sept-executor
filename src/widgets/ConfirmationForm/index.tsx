import {FC, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {OtpField} from '../../shared/ui/inputs/OtpField';
import {useAppDispatch, useAppSelector} from '../../app/store/hook';
import {
    getUserRegisterData,
    getUserResetData,
} from '../../entities/user/model/selectors';
import {userApi} from '../../entities/user/api';
import {auth} from '../../entities/user/model/auth';
import {mapAuthDTO, mapExecutorDTO} from '../../entities/user/api/mapping';
import {setUser} from '../../entities/user/model/slice';

/**
 * Шаблон формы подтверждения кода
 */
export const ConfirmationForm: FC = () => {
    const {email} = useAppSelector(getUserRegisterData);
    const resetData = useAppSelector(getUserResetData);
    const dispatch = useAppDispatch();

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

    const handleConfirm = async () => {
        if (!email) {
            toast.error('Не указан email');
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

            auth(data.data.token);
            dispatch(setUser(mapExecutorDTO(data.data.user)));
            toast.success(data.data.message);
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка авторизации';

            toast.error(message);
            setError('verificationСode', {message});
        }
    };

    const handleReset = async () => {
        if (!resetData.email) {
            toast.error('Не указан email');
            return;
        }

        try {
            const {data} = await userApi.resetPassword({
                email: resetData.email,
                newPassword: resetData.password,
                code,
            });

            console.log('resetPassword');
            console.log(data);

            if (!data.success) {
                const m = data.error || 'Ошибка сервера';
                toast.error(m);
                setError('verificationСode', {message: 'Неверный код'});
            }
            toast.success(data.data.message);

            const loginData = await userApi.auth({
                email: resetData.email,
                password: resetData.password,
            });

            if (!loginData.data.success) {
                toast.error(loginData.data.error);
                return;
            }

            auth(loginData.data.data.token);

            dispatch(setUser(mapAuthDTO(loginData.data.data)));
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка авторизации';

            toast.error(message);
            setError('verificationСode', {message});
        }
    };

    const handleChageCode = async () => {
        clearErrors('verificationСode');

        if (code.length !== 6) return;

        if (email) {
            handleConfirm();
        } else {
            handleReset();
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
