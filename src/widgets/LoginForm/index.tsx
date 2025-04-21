import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Link} from '@mui/material';
import {FC, useState} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {Link as ReactRouterDomLink} from 'react-router-dom';
import {signInDefaultsValues} from './data';
import {LoginFormData, signInFormSchema} from './schema';
import {buttonStyles, linkStyles} from './styles';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../app/store/hook';
import {LoginFormContent} from './LoginFormContent';
import {userApi} from '../../entities/user/api';
import {mapAuthDTO} from '../../entities/user/api/mapping';
import {auth} from '../../entities/user/model/auth';
import {setUser} from '../../entities/user/model/slice';
import {SlugPages} from '../../app/routes/pages';

/**
 * Форма авторизации
 */
export const LoginForm: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();

    /**
     * Вход по логину
     */
    const onSubmit = async (formData: Required<LoginFormData>) => {
        try {
            setIsLoading(true);
            const {data} = await userApi.auth({
                email: formData.email,
                password: formData.password,
            });

            if (!data.success) {
                toast.error(data.error);
                return;
            }

            auth(data.data.token);

            dispatch(setUser(mapAuthDTO(data.data)));
        } catch (error) {
            const message = error?.response?.data?.message;

            toast.error(message || 'Ошибка авторизации');
        }

        setIsLoading(false);
    };

    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(signInFormSchema)}
            defaultValues={signInDefaultsValues}
            mode="onChange"
        >
            <LoginFormContent />
            <Link
                to={`/${SlugPages.RESET}`}
                variant="body1"
                color="secondary"
                component={ReactRouterDomLink}
                sx={linkStyles}
            >
                Забыли пароль?
            </Link>
            <Button
                variant="contained"
                color="primary"
                sx={buttonStyles}
                type="submit"
                loading={isLoading}
            >
                Войти в личный кабинет
            </Button>
        </FormContainer>
    );
};
