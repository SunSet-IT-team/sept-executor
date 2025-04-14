import {FC} from 'react';
import {TextFieldElementProps, TextFieldElement} from 'react-hook-form-mui';

type AboutFieldProps = TextFieldElementProps;

/**
 * Поле ввода с экрана регистрации
 */
export const AboutField: FC<AboutFieldProps> = ({
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
        label={label}
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
);
