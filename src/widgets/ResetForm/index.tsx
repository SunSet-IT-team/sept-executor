import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Link, Typography} from '@mui/material';
import {FC, useState} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {resetDefaultsValues} from './data';
import {ResetFormData, resetFormSchema} from './schema';
import {buttonStyles} from './styles';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../app/store/hook';
import {ResetFormContent} from './ResetFormContent';
import {userApi} from '../../entities/user/api';
import {setResetData} from '../../entities/user/model/slice';
import {useNavigate} from 'react-router-dom';
import {SlugPages} from '../../app/routes/pages';

/**
 * Форма сброса пароля
 */
export const ResetForm: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    /**
     * Отправка кода
     */
    const onSubmit = async (formData: Required<ResetFormData>) => {
        try {
            setIsLoading(true);
            const {data} = await userApi.sendResetPasswordCode({
                email: formData.email,
            });

            if (!data.success) {
                toast.error(data.error);
                return;
            }

            toast.success(data.data.message);
            dispatch(setResetData(formData));
            navigate(`/${SlugPages.CONFIRM}`);
        } catch (error) {
            const message = error?.response?.data?.message;

            toast.error(message || 'Ошибка смены пароля');
        }

        setIsLoading(false);
    };

    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(resetFormSchema)}
            defaultValues={resetDefaultsValues}
            mode="onChange"
        >
            <Typography sx={{textAlign: 'center'}}>
                Укажите e-mail, указанный при регистрации, и новый пароль. На
                почту придет код подтверждения.
            </Typography>
            <ResetFormContent />
            <Button
                variant="contained"
                color="secondary"
                sx={buttonStyles}
                type="submit"
                loading={isLoading}
            >
                Сменить пароль
            </Button>
        </FormContainer>
    );
};
