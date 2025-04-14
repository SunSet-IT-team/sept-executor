import {Button, Stack, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {FileUploadsBlock} from '../../feature/RegistrationForm/ui/FilesUploadBlock';
import {FormCheckbox} from '../../shared/ui/inputs/ConsentCheckbox';
import {useStyles} from './styles';
import RegistrationFormContent from './RegistrationFormContent';
import {RegistrationFormData, registrationFormSchema} from './schema';
import {registrationFormDefaultValues} from './data';
import {FormContainer} from 'react-hook-form-mui';

export const RegistrationForm = () => {
    const styles = useStyles();

    const onSubmit = (data: any) => {
        // Хз как e.preventDefault вызвать
        console.log('submitted data', data);
    };

    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(registrationFormSchema)}
            defaultValues={registrationFormDefaultValues}
            mode="onChange"
            onError={(e) => console.log(e)}
        >
            <Stack gap={2} sx={styles.mainList}>
                <Typography variant="h6" sx={styles.mainInfo}>
                    Общая информация
                </Typography>

                <RegistrationFormContent />

                <FileUploadsBlock />

                <FormCheckbox />

                <Button type="submit" variant="contained" fullWidth>
                    Зарегистрироваться
                </Button>
            </Stack>
        </FormContainer>
    );
};
