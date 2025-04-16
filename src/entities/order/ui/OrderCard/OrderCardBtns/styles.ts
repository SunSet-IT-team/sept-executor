import {useTheme} from '@mui/material';
import {StylesDictionary} from '../../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        btn: {
            background: theme.palette.primary.main,
            color: theme.palette.text.white,
            borderRadius: '20px',
            py: '12px',
            width: '140px',
            fontSize: '14px',
        },
        btnWhite: {
            background: theme.palette.background.paper,
            color: theme.palette.text.black,
            borderRadius: '20px',
            py: '12px',
            width: '140px',
            fontSize: '14px',
        },
    };
};
