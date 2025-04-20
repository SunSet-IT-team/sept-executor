import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        docBlock: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 3,
        },
        title: {
            fontWeight: 500,
            mb: 2,
            fontSize: '14px',
        },
    };
};
