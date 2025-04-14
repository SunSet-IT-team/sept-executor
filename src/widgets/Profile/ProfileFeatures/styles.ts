import {useTheme} from '@mui/material/styles';
import { StylesDictionary } from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            mt: "12px",
            width: "100%"
        }
    };
};

export const item_size = {xs: 6};