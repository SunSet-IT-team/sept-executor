import {SxProps, Theme, useTheme} from '@mui/material';
import {StylesDictionary} from '../../../../shared/types/share';

export const titleBefDataSx: SxProps<Theme> = {};

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        titleBefDataSx: {
            mb: 2,
            textAlign: 'center',
            fontWeight: 500,
            my: '45px',
            letterSpacing: '-0.05em',
        },
    };
};
