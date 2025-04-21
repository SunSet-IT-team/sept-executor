import {Stack} from '@mui/material';
import {FC} from 'react';
import {resetInputsData} from '../data';
import {stackStyles} from './styles';
import InputFactory from '../../../feature/InputFactory';

/**
 * Поля для сброса пароля
 */
export const ResetFormContent: FC = () => {
    return (
        <Stack sx={stackStyles}>
            {resetInputsData.map((el) => (
                <InputFactory {...el} key={el.name} />
            ))}
        </Stack>
    );
};
