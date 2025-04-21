import {useTheme} from '@mui/material';
import {StylesDictionary} from '../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        constainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            width: '100%',
            mt: '40px',
        },
        btn: {
            background: theme.palette.primary.main,
            color: theme.palette.text.white,
            borderRadius: '10px',
            py: '12px',
            width: '100%',
            fontSize: '14px',
            letterSpacing: '-0.05em',
        },
    };
};
