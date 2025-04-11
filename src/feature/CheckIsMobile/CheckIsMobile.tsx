import {Box, Typography} from '@mui/material';
import {FC, PropsWithChildren} from 'react';
import {useMediaQuery} from 'usehooks-ts';

/**
 * Проверка на телеофн
 */
export const CheckIsMobile: FC<PropsWithChildren> = ({children}) => {
    const matches = useMediaQuery('(max-width: 767px)');
    return (
        <div>
            {matches ? (
                children
            ) : (
                <Box
                    display="flex"
                    alignItems={'center'}
                    justifyContent={'center'}
                    minHeight={'100dvh'}
                >
                    <Typography variant="h1" textAlign={'center'}>
                        Пожалуйста, зайдите с мобильного устройства
                    </Typography>
                </Box>
            )}
        </div>
    );
};
