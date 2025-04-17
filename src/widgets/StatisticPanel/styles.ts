import {useTheme} from '@mui/material/styles';
import { StylesDictionary } from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        firstStatsBlock: {
            mt: '30px',
        },

        secondStatsBlock: {
            mt: '25px',
        },
    };
};
