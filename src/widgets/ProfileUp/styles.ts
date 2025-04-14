import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        chatHeader: {
            backgroundColor: '#4D4D4D',
            position: 'sticky',
            left: 0,
            top: 0,
            right: 0,
            borderBottomLeftRadius: '10px',
            WebkitBorderBottomLeftRadius: '10px',
            py: 4,
            width: '100%',
        },

        chatHeaderUser: {
            justifyContent: 'center',
            alignItems: 'center',
            py: '15px',
        },

        chatHeaderUserName: {
            textAlign: 'center',
            color: 'white',
            mt: 3,
            mb: 3,
            fontWeight: 500,
            fontSize: '20px',
        },

        chatHeaderUserImage: {
            borderRadius: '10px',
            width: 108,
            height: 108,
            backgroundColor: '#D9D9D9',
        },
    };
};
