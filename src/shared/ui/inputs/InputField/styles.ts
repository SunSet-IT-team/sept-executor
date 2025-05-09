import {SxProps, Theme} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        label: {
            fontWeight: 500,
        },
    };
};

export const labelStyles: SxProps<Theme> = {
    mb: 1,
    fontWeight: 500,
    fontSize: "1rem"
};

export const requiredAsteriskStyles = {
    color: 'red',
    marginLeft: '2px',
    marginTop: '-10px',
};

export const textFieldStyles: SxProps<Theme> = {
    '& .MuiInputBase-input': {
        padding: '10px',
    },
};
