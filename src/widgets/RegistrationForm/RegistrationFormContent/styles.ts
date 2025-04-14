import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        container: {
            alignItems: 'center',
            marginTop: '24px',
            gap: '16px',
            width: '100%',
        },
        input: {width: '100%'},
    };
};
