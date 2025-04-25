import {Button, Stack, Typography} from '@mui/material';
import {zodResolver} from '@hookform/resolvers/zod';
import {useStyles} from './styles';
import {FormContainer, useForm} from 'react-hook-form-mui';
import {userApi} from '../../entities/user/api';
import {useAppDispatch, useAppSelector} from '../../app/store/hook';
import {
    getCurrentUser,
    getUserRegisterData,
} from '../../entities/user/model/selectors';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {setRegisterEmail, setUser} from '../../entities/user/model/slice';
import {useEffect, useState} from 'react';
import {SlugPages} from '../../app/routes/pages';
import {
    UserApiChangeMeParams,
    UserApiRegisterParams,
} from '../../entities/user/api/types';
import {settingFormDefaultValues} from './data';
import {SettingFormData, settingFormSchema} from './schema';
import SettingFormContent from './SettingFormContent';
import {UploadFileWithLabel} from '../../shared/ui/UploadFile/UploadFileWithLabel/UploadFileWithLabel';
import {urlToFile} from '../../shared/utils/share';
import useSettingFormInitData from './useSettingFormInitData';
import LoadPage from '../../pages/LoadPage';
import {mapAuthDTO, mapExecutorDTO} from '../../entities/user/api/mapping';

/**
 * Форма Настроек
 */
export const SettingForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [editName, setEditName] = useState<string | null>(null); // Текущее редактируемое поле
    const user = useAppSelector(getCurrentUser);

    const formContext = useForm<SettingFormData>({
        defaultValues: settingFormDefaultValues,
        resolver: zodResolver(settingFormSchema),
    });

    const {isInitializing} = useSettingFormInitData(formContext, user);

    const styles = useStyles();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async (formData: Required<SettingFormData>) => {
        // Делаем заготовку под
        const changeMeData: UserApiChangeMeParams = {};

        if (formData.name !== user.name) {
            changeMeData.companyName = formData.name;
        }

        if (formData.phone !== user.phone) {
            changeMeData.phone = formData.phone;
        }

        if (formData.email !== user.email) {
            changeMeData.email = formData.email;
        }

        if (`${formData.experience}` !== user.experience) {
            changeMeData.experience = `${formData.experience}`;
        }

        if (formData.city !== user.city) {
            changeMeData.city = formData.city;
        }

        if (formData.newPassword) {
            changeMeData.password = formData.newPassword;
        }

        if (formData.about !== user.about) {
            changeMeData.about = formData.about;
        }

        // Проверка на изменение аватара
        // Преобразуем оригинальный URL в файл для сравнения
        const originalFile = await urlToFile(user.profileImage);

        const isSameFile =
            formData.profileImage.name === originalFile.name &&
            formData.profileImage.size === originalFile.size &&
            formData.profileImage.type === originalFile.type;

        if (!isSameFile) {
            changeMeData.profilePhoto = formData.profileImage;
        }

        try {
            setIsLoading(true);
            const {data} = await userApi.changeMe(changeMeData);

            if (!data.success) {
                const m = data.error || 'Ошибка изменения данных';
                toast.error(m);
                return;
            }

            dispatch(setUser(mapExecutorDTO(data.data)));
            toast.success('Данные успешно обновлены');
            navigate(`/`);
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка Регистрации';

            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isInitializing) return <LoadPage />;

    return (
        <FormContainer
            onSuccess={onSubmit}
            formContext={formContext}
            mode="onChange"
            onError={(e) => console.log(e)}
        >
            <Stack gap={2} sx={styles.mainList}>
                <SettingFormContent
                    editName={editName}
                    onClickEdit={(name: string) => setEditName(name)}
                />

                <UploadFileWithLabel
                    name="profileImage"
                    label="Фото профиля"
                    error={formContext.formState.errors?.profileImage?.message}
                />

                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    disabled={isLoading}
                    fullWidth
                >
                    Сохранить изменения
                </Button>
            </Stack>
        </FormContainer>
    );
};
