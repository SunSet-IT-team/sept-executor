import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        pageContainer: {
            position: 'relative',
            py: '26px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
    };
};
