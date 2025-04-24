import {useState, FC} from 'react';
import {
    IconButton,
    InputAdornment,
    TextFieldProps,
    Box,
    Typography,
    OutlinedTextFieldProps
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {TextFieldElement} from 'react-hook-form-mui';
import {labelStyles, requiredAsteriskStyles} from './styles';

interface PasswordFieldProps extends OutlinedTextFieldProps {
    labelPosition?: 'start' | 'center' | 'end';
}

/**
 * Поле для ввода и просмотра пароля
 */
export const PasswordField: FC<PasswordFieldProps> = ({
    label,
    labelPosition = 'center',
    name,
    required,
    error,
    helperText,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box width={"100%"}>
            <Typography
                variant="subtitle1"
                sx={labelStyles}
                textAlign={labelPosition}
            >
                {label}
                {required && <span style={requiredAsteriskStyles}>*</span>}
            </Typography>
            <TextFieldElement
                name={name}
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                error={error}
                helperText={helperText}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                        setShowPassword((prev) => !prev)
                                    }
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
        </Box>
    );
};
