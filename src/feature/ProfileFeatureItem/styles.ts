import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            p: '20px',
            borderRadius: '20px',
            border: '1px solid',
            borderColor: theme.palette.primary.main,
            height: '103px',
            alignItems: 'center',
            color: 'inherit',
            '@media (max-width: 365px)': {
                px: '8px',
            },
        },

        icon: {
            justifyContent: 'center',
            '& svg': {
                width: '32px',
                height: '32px',
                fill: theme.palette.primary.main,
            },
        },

        text: {
            fontWeight: 500,
            m: 0,
            mt: 0.5,
            lineHeight: '21px',
            height: '21px',
            '& span': {
                fontWeight: 500,
                lineHeight: '21px',
            },
        },
    };
};
