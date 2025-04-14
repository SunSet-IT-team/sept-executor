import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        layout: {
            height: '100dvh',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
        content: {
            width: '100%',
            flexGrow: 1,
            overflowY: 'auto',
            pt: 2,
        },
    };
};
