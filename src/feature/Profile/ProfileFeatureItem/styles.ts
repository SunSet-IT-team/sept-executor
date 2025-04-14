import {useTheme} from '@mui/material/styles';
import { StylesDictionary } from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            p: '20px',
            borderRadius: '20px',
            border: '1px solid',
            borderColor: theme.palette.primary.main,
            height: '103px',
            alignItems: 'center',
            color: 'inherit',
        },
    };
};
