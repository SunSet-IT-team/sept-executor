import {Stack} from '@mui/material';
import {FC} from 'react';
import {signInInputsData} from '../data';
import {inputStackStyles, stackStyles} from './styles';
import {InputField} from '../../../shared/ui/inputs/InputField';
import {PasswordField} from '../../../shared/ui/inputs/PasswordField';

/**
 * Поля для входа
 */
export const LoginFormContent: FC = () => {
    return (
        <Stack sx={stackStyles}>
            {signInInputsData.map(({label, name, type, required}) => (
                <Stack key={label} sx={inputStackStyles}>
                    {name === 'password' ? (
                        <PasswordField
                            label={label}
                            name={name}
                            type={type}
                            required={required}
                        />
                    ) : (
                        <InputField
                            label={label}
                            name={name}
                            type={type}
                            required={required}
                        />
                    )}
                </Stack>
            ))}
        </Stack>
    );
};
