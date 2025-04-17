import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        root: {
            mt: '35px',
            px: '20px',
        },
    };
};
