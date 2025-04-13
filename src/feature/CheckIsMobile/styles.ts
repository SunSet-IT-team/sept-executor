import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100dvh',
        },
        title: {
            textAlign: 'center',
        },
    };
};
