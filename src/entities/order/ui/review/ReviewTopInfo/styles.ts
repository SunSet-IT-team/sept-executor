import {StylesDictionary} from '../../../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        imageContainerStyle: {
            width: '90px',
            height: '90px',
            borderRadius: '20px',
            position: 'relative',
        },

        label: {
            fontWeight: 600,
        },
    };
};

export const imageStyle = {
    borderRadius: '20px',
    width: '90px',
    height: '90px',
};
