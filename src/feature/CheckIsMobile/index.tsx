import {Box, Typography} from '@mui/material';
import {FC, PropsWithChildren} from 'react';
import {useMediaQuery} from 'usehooks-ts';
import {useStyles} from './styles';

/**
 * Проверка на телеофн
 */
export const CheckIsMobile: FC<PropsWithChildren> = ({children}) => {
    const matches = useMediaQuery('(max-width: 760px)');
    const styles = useStyles();

    return (
        <div>
            {matches ? (
                children
            ) : (
                <Box sx={styles.container}>
                    <Typography variant="h1" sx={styles.title}>
                        Пожалуйста, зайдите с мобильного устройства
                    </Typography>
                </Box>
            )}
        </div>
    );
};
