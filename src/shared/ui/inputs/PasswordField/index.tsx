import {useState, forwardRef, FC} from 'react';
import {
    TextField,
    IconButton,
    InputAdornment,
    TextFieldProps,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {TextFieldElement} from 'react-hook-form-mui';

type PasswordFieldProps = TextFieldProps;

/**
 * Поле для ввода и просмотра пароля
 */
export const PasswordField: FC<PasswordFieldProps> = ({
    label,
    name,
    required,
    error,
    helperText,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextFieldElement
            name={name}
            variant="outlined"
            fullWidth
            label={label}
            type={showPassword ? 'text' : 'password'}
            error={error}
            helperText={helperText}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowPassword((prev) => !prev)}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
};
