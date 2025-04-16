import {useTheme} from '@mui/material';
import {StylesDictionary} from '../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            background: theme.palette.background.order,
            borderRadius: '20px',
            p: '20px',
            pb: '28px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        title: {
            mb: '20px',
            fontSize: '20px',
            fontWeight: 500,
            color: theme.palette.primary.main,
        },

        info: {
            mb: '4px',
            fontSize: '16px',
            color: theme.palette.text.black,
        },

        btns: {
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
        },
    };
};
