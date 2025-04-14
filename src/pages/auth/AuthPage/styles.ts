import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        pageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        },
        label: {
            textAlign: 'center',
        },
        firstBtn: {py: '17px', mt: '40px', mb: '20px'},
        secondBtn: {py: '17px'},
    };
};
