import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        root: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '20px',
            padding: 2,
            height: '56px',
            mt: '32px',
        },
    };
};
