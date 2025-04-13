import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my: 3,
        },
        errCheckbox: {
            '& svg': {
                fill: '#D32F2F',
            },
        },
    };
};
