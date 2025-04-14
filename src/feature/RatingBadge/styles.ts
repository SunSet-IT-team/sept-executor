import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '8px 16px',
            boxShadow: theme.shadows[1],
        },

        starIcon: {
            color: '#FFD700',
            fontSize: '18px',
        },

        rate: {
            fontWeight: 600,
            ml: 0.5,
        },

        qty: {
            color: 'text.secondary',
            ml: 0.5,
        },
    };
};
