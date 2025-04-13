import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            gap: '30px',
            mt: '30px',
            p: '10px',
            borderRadius: '10px',
        },
        errMsg: {
            mt: '8px',
            fontSize: '0.875rem',
        },
    };
};
