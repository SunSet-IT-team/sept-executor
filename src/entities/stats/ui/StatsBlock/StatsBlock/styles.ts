import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        title: {textAlign: 'center', mb: '25px', fontWeight: 700},
        rowContainer: {
            width: '100%',
        },
    };
};
