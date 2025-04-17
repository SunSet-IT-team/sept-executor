import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        message: {
            p: '10px',
            maxWidth: '90%',
            borderRadius: '5px',
            mr: 'auto',
            ml: '',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.text.black,
        },

        myMessage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            p: '10px',
            maxWidth: '90%',
            borderRadius: '5px',
            ml: 'auto',
            mr: '',

            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.white,
        },

        messageContent: {
            fontSize: '14px',
            wordBreak: 'break-all',
        },
        messageTime: {
            fontSize: '10px',
        },
        messageAdditional: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            gap: '5px',
            alignItems: 'center',
            mt: '5px',
        },
    };
};
