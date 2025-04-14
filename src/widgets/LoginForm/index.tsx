import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Link} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {Link as ReactRouterDomLink} from 'react-router-dom';
import {signInDefaultsValues} from './data';
import {signInFormSchema} from './schema';
import {buttonStyles, linkStyles} from './styles';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../app/store/hook';
import {LoginFormContent} from './LoginFormContent';

/**
 * Форма авторизации
 */
export const LoginForm: FC = () => {
    const dispatch = useAppDispatch();

    /**
     * Вход по логину
     */
    const onSubmit = async (data: any) => {
        try {
            console.log(data);

            // const res = await SERVICES.AuthService.login(data);
            // if (!res.success) return;

            // auth(res.data.token);
            // dispatch(setUser(mappginServerCustomer(res.data.user)));
        } catch (error) {
            const message = error?.response?.data?.message;

            toast.error(message || 'Ошибка авторизации');
        }
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
                to="/forgot-password"
                variant="body1"
                color="secondary"
                component={ReactRouterDomLink}
                sx={linkStyles}
            >
                Забыли пароль?
            </Link>
            <Button
                variant="contained"
                color="secondary"
                sx={buttonStyles}
                type="submit"
            >
                Войти в личный кабинет
            </Button>
        </FormContainer>
    );
};
