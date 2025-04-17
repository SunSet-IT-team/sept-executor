import {SxProps, useTheme} from '@mui/material/styles';
import { StylesDictionary } from '../../../shared/types/share';
import { Theme } from '@emotion/react';

export const useStyles = (sx : SxProps<Theme>): StylesDictionary => {
    const theme = useTheme();

    return {
        root: {
            p: '25px 35px',
            border: '1px solid',
            borderRadius: '20px',
            borderColor: 'primary.main',
            fontWeight: 500,
            ...sx,
        },

        rowItem: {
            flex: '1 1 auto',
            textAlign: 'center',
        },

        rowItem__value: {
            fontSize: '24px',
            color: 'primary.main',
            fontWeight: 'inherit',
        },
    };
};
