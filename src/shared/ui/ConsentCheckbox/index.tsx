import {FC} from 'react';
import {Controller, Control} from 'react-hook-form';
import {Checkbox, FormControlLabel, FormHelperText, Box} from '@mui/material';
import {useStyles} from './styles';

interface Props {
    control: Control<any>;
    name?: string;
    label: string;
}

export const ConsentCheckbox: FC<Props> = ({
    control,
    label,
    name = 'consent',
}) => {
    const styles = useStyles();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState}) => (
                <Box sx={styles.container}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...field}
                                sx={fieldState.error && styles.errCheckbox}
                            />
                        }
                        label={label}
                    />
                    {fieldState.error && (
                        <FormHelperText error>
                            {fieldState.error.message}
                        </FormHelperText>
                    )}
                </Box>
            )}
        />
    );
};
