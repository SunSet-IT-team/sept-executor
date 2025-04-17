import {StylesDictionary} from '../../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        textField: {
            '& .MuiInputBase-inputMultiline': {
                color: 'text.secondary',
            },
        },

        scoreContainer: {
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: '35px',
            mb: 1,
        },

        label: {
            fontWeight: 600,
        },

        underline: {mb: '10px'},
    };
};
