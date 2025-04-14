import {Stack} from '@mui/material';
import InputFactory from '../../../feature/InputFactory';
import {registrationFormData} from '../data';
import {useStyles} from './styles';

/**
 * Контент полей для регистрации
 */
const RegistrationFormContent = () => {
    const styles = useStyles();

    return (
        <Stack sx={styles.container}>
            {registrationFormData.map((el) => (
                <Stack key={el.label} sx={styles.input}>
                    <InputFactory {...el} />
                </Stack>
            ))}
        </Stack>
    );
};

export default RegistrationFormContent;
