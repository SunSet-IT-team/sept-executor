import {SxProps, useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';
import { Theme } from '@emotion/react';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        txtField: {
            backgroundColor: 'primary.light',
            borderRadius: '10px',
            padding: '8px 12px',
        },
    };
};

export const labelStyles: SxProps<Theme> = {
    mb: 1,
    fontWeight: 500,
    fontSize: "1rem"
};

export const requiredAsteriskStyles = {
    color: 'red',
    marginLeft: '2px',
    marginTop: '-10px',
};

export const textFieldStyles: SxProps<Theme> = {
    '& .MuiInputBase-input': {
        padding: '10px',
    },
};
