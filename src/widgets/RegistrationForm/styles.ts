import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        mainList: {
            mt: '30px',
            px: '15px',
        },

        mainInfo: {
            textAlign: 'center',
            fontWeight: 500,
            fontSize: '20px',
            mb: '20px',
        },

        aboutCompany: {
            fontWeight: 500,
            my: '10px',
        },
    };
};
