import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        root: {
            p: '20px',
            border: '1px solid',
            borderRadius: '20px',
            borderColor: 'primary.main',
            flex: '1 1 auto',
            textAlign: 'center',
        },
    };
};
