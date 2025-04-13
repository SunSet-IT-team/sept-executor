import {FC} from 'react';
import {TextFieldElementProps, TextFieldElement} from 'react-hook-form-mui';

type InputFieldProps = TextFieldElementProps;

/**
 * Поле ввода с экрана регистрации
 */
export const InputField: FC<InputFieldProps> = ({
    label,
    name,
    type = 'text',
    required,
    error,
    helperText,
    ...rest
}) => (
    <TextFieldElement
        name={name}
        variant="outlined"
        fullWidth
        type={type}
        error={error}
        helperText={helperText}
        required={required}
        {...rest}
    />
);
