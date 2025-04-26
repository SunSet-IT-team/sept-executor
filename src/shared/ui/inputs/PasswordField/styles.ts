import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    return {
        textFieldStyles: {
            '& .MuiInputBase-input': {
                padding: '10px',
            },
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
