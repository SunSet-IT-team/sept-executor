import {Button, Stack, Typography} from '@mui/material';
import {zodResolver} from '@hookform/resolvers/zod';
import {FileUploadsBlock} from '../../feature/RegistrationForm/ui/FilesUploadBlock';
import {FormCheckbox} from '../../shared/ui/inputs/ConsentCheckbox';
import {useStyles} from './styles';
import RegistrationFormContent from './RegistrationFormContent';
import {RegistrationFormData, registrationFormSchema} from './schema';
import {registrationFormDefaultValues} from './data';
import {FormContainer} from 'react-hook-form-mui';
import {userApi} from '../../entities/user/api';
import {useAppDispatch, useAppSelector} from '../../app/store/hook';
import {getUserRegisterData} from '../../entities/user/model/selectors';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {setRegisterEmail} from '../../entities/user/model/slice';
import {useState} from 'react';
import {SlugPages} from '../../app/routes/pages';

/**
 * Форма регистрации
 */
export const RegistrationForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const styles = useStyles();
    const registerData = useAppSelector(getUserRegisterData);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async (formData: Required<RegistrationFormData>) => {
        if (!registerData.workFormat) {
            toast.error('Не выбран тип оказания услуг');
            return;
        }

        try {
            setIsLoading(true);
            const {data} = await userApi.register({
                email: formData.email,
                password: formData.password,
                experience: formData.experience,
                phone: formData.phone,
                companyName: formData.name,
                workFormat: registerData.workFormat,
                about: formData.about,
                city: formData.city,
            });

            if (!data.success) {
                const m = data.error || 'Ошибка регистрации';
                toast.error(m);
                return;
            }

            dispatch(setRegisterEmail(data.data.user.email));
            toast.success(data.data.message);
            navigate(`/${SlugPages.CONFIRM}`);
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка Регистрации';

            toast.error(message);
        }

        setIsLoading(false);
    };

    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(registrationFormSchema)}
            defaultValues={registrationFormDefaultValues}
            mode="onChange"
        >
            <Stack gap={2} sx={styles.mainList}>
                <Typography variant="h6" sx={styles.mainInfo}>
                    Общая информация
                </Typography>

                <RegistrationFormContent />

                <FileUploadsBlock />

                <FormCheckbox />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    loading={isLoading}
                >
                    Зарегистрироваться
                </Button>
            </Stack>
        </FormContainer>
    );
};
