import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        layout: {
            position: 'relative',
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
