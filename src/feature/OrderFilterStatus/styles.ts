import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            position: 'sticky',
            left: 0,
            right: 0,
            top: 0,
            display: 'flex',
            overflowX: 'auto',
            gap: '16px',
            mb: 2,
            py: 1,
            px: 1,
            bgcolor: 'background.paper',
            '&::-webkit-scrollbar': {
                height: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'secondary.main',
            },
        },

        button: {
            minWidth: '120px',
            marginRight: theme.spacing(1),
            textTransform: 'none',
            fontWeight: '500',
            fontSize: '16px',
            border: 'none',
            whiteSpace: 'nowrap',
            color: theme.palette.text.black,
        },
        selectedButton: {
            minWidth: '120px',
            marginRight: theme.spacing(1),
            textTransform: 'none',
            fontWeight: 'bold',
            color: theme.palette.secondary.main,
            textDecoration: 'underline',
            border: `none`,
            whiteSpace: 'nowrap',
        },
    };
};
