import {Button, Stack, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    registrationFormSchema,
    RegistrationFormData,
    registrationForm_defaultValues,
} from '../../feature/RegistrationForm/model/validation';
import {AboutInput} from '../../feature/RegistrationForm/ui/AboutInput';
import {FileUploadsBlock} from '../../feature/RegistrationForm/ui/FilesUploadBlock';
import {ConsentCheckbox} from '../../shared/ui/inputs/ConsentCheckbox';
import {useStyles} from './styles';
import {InputField} from '../../shared/ui/inputs/InputField_new';

export const RegistrationForm = () => {
    const styles = useStyles();

    const {control, handleSubmit} = useForm<RegistrationFormData>({
        resolver: zodResolver(registrationFormSchema),
        defaultValues: registrationForm_defaultValues,
    });

    const onSubmit = (data: RegistrationFormData) => {
        // Хз как e.preventDefault вызвать
        console.log('submitted data', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2} sx={styles.mainList}>
                <Typography variant="h6" sx={styles.mainInfo}>
                    Общая информация
                </Typography>

                <InputField
                    name="name"
                    control={control}
                    label="Наименование"
                />
                <InputField name="phone" control={control} label="Телефон" />
                <InputField name="email" control={control} label="Email" />
                <InputField
                    name="experience"
                    control={control}
                    label="Опыт работы"
                />

                <Typography sx={styles.aboutCompany}>О компании</Typography>
                <AboutInput control={control} />

                <FileUploadsBlock control={control} />

                <ConsentCheckbox
                    control={control}
                    label="Согласие на обработку персональных данных"
                />

                <Button type="submit" variant="contained" fullWidth>
                    Зарегистрироваться
                </Button>
            </Stack>
        </form>
    );
};
