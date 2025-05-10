import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        txtField: {
            backgroundColor: 'primary.light',
            borderRadius: '10px',
            padding: '8px 12px',
        },

        labelStyles: {
            mb: 1,
            fontWeight: 500,
            fontSize: '1rem',
        },
    };
};

export const requiredAsteriskStyles = {
    color: 'red',
    marginLeft: '2px',
    marginTop: '-10px',
};
