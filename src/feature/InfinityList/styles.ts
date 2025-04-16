import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        title: {
            my: '20px',
            fontSize: '20px',
            fontWeight: 500,
            color: theme.palette.primary.main,
        },
    };
};
