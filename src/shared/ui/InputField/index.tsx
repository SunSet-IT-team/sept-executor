import {TextField, Typography} from '@mui/material';
import {Controller} from 'react-hook-form';
import { useStyles } from './styles';

/**
 * Поле ввода с экрана регистрации
 */
export const InputField = ({
    name,
    control,
    label,
    withInputLabel = false,
    ...rest
}) => {
    const styles = useStyles()

    return (
        <>
            <Typography sx={styles.label}>{label}</Typography>
            <Controller
                name={name}
                control={control}
                render={({field, fieldState}) => (
                    <TextField
                        fullWidth
                        label={withInputLabel ? label : undefined}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        {...field}
                        {...rest}
                    />
                )}
            />
        </>
    );
};
