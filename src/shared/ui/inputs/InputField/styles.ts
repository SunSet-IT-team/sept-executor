import {SxProps, Theme} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        label: {
            fontWeight: 500,
        },

        labelStyles: {
            mb: 1,
            fontWeight: 500,
            fontSize: '1rem',
        },

        textFieldStyles: {
            '& .MuiInputBase-input': {
                padding: '10px',
            },
        },
    };
};

export const requiredAsteriskStyles = {
    color: 'red',
    marginLeft: '2px',
    marginTop: '-10px',
};
