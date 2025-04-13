import {FormHelperText, TextField} from '@mui/material';
import {Controller} from 'react-hook-form';
import {useStyles} from './styles';

export const AboutInput = ({control}) => {
    const styles = useStyles();

    return (
        <Controller
            name="about"
            control={control}
            render={({field, fieldState}) => (
                <>
                    <TextField
                        multiline
                        fullWidth
                        rows={7}
                        variant="standard"
                        placeholder="Введите текст..."
                        error={!!fieldState.error}
                        {...field}
                        slotProps={{input: {disableUnderline: true}}}
                        sx={styles.txtField}
                    />
                    {fieldState.error && (
                        <FormHelperText error>
                            {fieldState.error.message}
                        </FormHelperText>
                    )}
                </>
            )}
        />
    );
};
