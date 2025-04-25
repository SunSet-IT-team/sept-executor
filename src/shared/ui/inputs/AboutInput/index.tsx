import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {TextFieldElementProps, TextFieldElement} from 'react-hook-form-mui';
import {labelStyles, requiredAsteriskStyles} from '../InputField/styles';

interface AboutFieldProps extends TextFieldElementProps {
    labelPosition?: 'start' | 'center' | 'end';
}

/**
 * Поле ввода с экрана регистрации
 */
export const AboutField: FC<AboutFieldProps> = ({
    label,
    labelPosition = 'center',
    name,
    type = 'text',
    required,
    error,
    helperText,
    ...rest
}) => (
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
            multiline
            fullWidth
            rows={7}
            placeholder="Введите текст..."
            type={type}
            error={error}
            helperText={helperText}
            required={required}
            {...rest}
        />
    </Box>
);
