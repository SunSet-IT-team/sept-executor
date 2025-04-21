import {useTheme} from '@mui/material';
import {StylesDictionary} from '../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            background: theme.palette.background.blue,
            borderRadius: '20px',
            p: '20px',
            pb: '28px',
            display: 'flex',
            gap: '20px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        title: {
            mb: '20px',
            fontSize: '20px',
            fontWeight: 500,
            color: theme.palette.text.gray,
        },

        info: {
            mb: '4px',
            fontSize: '16px',
            color: theme.palette.text.black,
            letterSpacing: '-0.02rem',
        },

        text: {
            textDecoration: 'none',
        },

        btns: {
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
        },
    };
};
