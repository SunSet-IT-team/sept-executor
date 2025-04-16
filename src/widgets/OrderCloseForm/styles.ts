import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        btn: {
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
