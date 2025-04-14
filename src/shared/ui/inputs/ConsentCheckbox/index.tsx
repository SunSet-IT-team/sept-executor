import {FC} from 'react';
import {FormControlLabel} from '@mui/material';
import {useStyles} from './styles';
import {CheckboxElement} from 'react-hook-form-mui';

/**
 * Политика конфинденциальности
 */
export const FormCheckbox: FC<{error?: string}> = ({error}) => {
    const styles = useStyles();

    return (
        <FormControlLabel
            control={
                <CheckboxElement
                    name="consent"
                    color="secondary"
                    sx={error ? styles.checkbox : {}}
                />
            }
            label="Согласие на обработку персональных данных"
            sx={styles.label}
        />
    );
};
