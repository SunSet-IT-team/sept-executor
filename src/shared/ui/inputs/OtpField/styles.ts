import {SxProps, Theme} from '@mui/material';

export const otpInputStyles: SxProps<Theme> = {
    gap: 1,
    color: '#3FBC14',
    '& .MuiInputBase-root': {
        width: 'min(15vw, 50px)',
        height: 'min(15vw, 50px)',
    },
    '& .MuiInputBase-input': {
        fontSize: '32px',
        color: '#3FBC14',
    },
};

export const helperTextStyles: SxProps<Theme> = {
    textAlign: 'center',
    fontSize: '14px',
};
