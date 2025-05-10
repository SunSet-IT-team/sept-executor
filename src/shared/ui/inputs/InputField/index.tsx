import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {TextFieldElementProps, TextFieldElement} from 'react-hook-form-mui';
import {useStyles, requiredAsteriskStyles} from './styles';

interface IProps extends TextFieldElementProps {
    labelPosition?: 'start' | 'center' | 'end';
}

/**
 * Поле ввода с экрана регистрации
 */
export const InputField: FC<IProps> = ({
    labelPosition = 'center',
    label,
    name,
    type = 'text',
    required,
    error,
    helperText,
    ...rest
}) => {
    const styles = useStyles();

    return (
        <Stack width="100%">
            <Typography
                variant="subtitle1"
                sx={styles.labelStyles}
                textAlign={labelPosition}
            >
                {label}
                {required && <span style={requiredAsteriskStyles}>*</span>}
            </Typography>
            <TextFieldElement
                name={name}
                variant="outlined"
                fullWidth
                type={type}
                error={error}
                helperText={helperText}
                required={required}
                sx={styles.textFieldStyles}
                {...rest}
            />
        </Stack>
    );
};
