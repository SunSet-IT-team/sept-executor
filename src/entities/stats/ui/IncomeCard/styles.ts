import {SxProps, useTheme} from '@mui/material/styles';
import {Theme} from '@emotion/react';
import {StylesDictionary} from '../../../../shared/types/share';

export const useStyles = (sx: SxProps<Theme>): StylesDictionary => {
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
            fontWeight: 500,
        },

        text: {
            fontWeight: 500,
            lineHeight: '21px',
            fontSize: '16px',
        },

        rowItem__value: {
            fontSize: '24px',
            color: 'secondary.main',
            lineHeight: '21px',
            fontWeight: 'inherit',
        },
    };
};
