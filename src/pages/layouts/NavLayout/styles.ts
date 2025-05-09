import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        layout: {
            position: 'relative',
            flexGrow: 1,
            pb: '100px',
        },
        navigation: {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            background: 'none',
        },
    };
};
