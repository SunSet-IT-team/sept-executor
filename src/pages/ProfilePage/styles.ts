import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            px: '20px',
            pb: '140px',
        },
    };
};
