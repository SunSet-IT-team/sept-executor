import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        label: {
            '& .MuiFormControlLabel-label': {
                fontSize: '14px',
            },
            '& .MuiFormHelperText-root': {
                borderColor: 'red',
                position: 'absolute',
                width: 'max-content',
                top: '50px',
                left: 0,
                right: 0,
                display: 'block',
            },
        },
        checkbox: {
            '& .MuiSvgIcon-root': {
                color: 'red',
            },
        },
    };
};
