import {Box, FormHelperText} from '@mui/material';
import {MuiOtpInput} from 'mui-one-time-password-input';
import {FC} from 'react';
import {helperTextStyles, otpInputStyles} from './styles';
import {ControllerRenderProps} from 'react-hook-form-mui';

/**
 * Инпут для ввода числа
 */
export const OtpField: FC<{
    field: ControllerRenderProps<{
        verificationСode: string;
    }>;
    errorMessage?: string;
}> = ({field, errorMessage}) => (
    <Box>
        <MuiOtpInput
            sx={otpInputStyles}
            {...field}
            length={6}
            justifyContent={'center'}
            TextFieldsProps={{
                error: !!errorMessage,
                type: 'number',
            }}
        />
        {errorMessage && (
            <FormHelperText error sx={helperTextStyles}>
                {errorMessage}
            </FormHelperText>
        )}
    </Box>
);
