import {Stack} from '@mui/material';
import {FC} from 'react';
import {signInInputsData} from '../data';
import {stackStyles} from './styles';
import InputFactory from '../../../feature/InputFactory';

/**
 * Поля для входа
 */
export const LoginFormContent: FC = () => {
    return (
        <Stack sx={stackStyles}>
            {signInInputsData.map((el) => (
                <InputFactory {...el} />
            ))}
        </Stack>
    );
};
