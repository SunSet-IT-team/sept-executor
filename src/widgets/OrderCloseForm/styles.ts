import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            width: '100%',
            mt: '40px',
        },
        title: {
            textAlign: 'center',
            mb: '28px',
        },
        list: {
            mb: '28px',
        },
        btn: {
            mt: '28px',
            background: theme.palette.primary.main,
            color: theme.palette.text.white,
            borderRadius: '20px',
            py: '12px',
            width: '100%',
            fontSize: '14px',
            letterSpacing: '-0.05em',
        },
    };
};
