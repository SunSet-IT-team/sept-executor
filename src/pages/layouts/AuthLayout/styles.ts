import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        container: {
            padding: '20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            bottom: "20px",
            objectFit: 'cover',
            objectPosition: 'center',
            width: 'auto',
            height: {xs: 90, md: 120},
            mb: 2,
            zIndex: -1
        },
    };
};
