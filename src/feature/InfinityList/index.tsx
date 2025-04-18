import {Box, CircularProgress, Stack, Typography} from '@mui/material';
import {Order} from '../../entities/order/model/types';
import OrderCard from '../../entities/order/ui/OrderCard';
import {useStyles} from './styles';
import {ReactElement, RefCallback} from 'react';

type InfinityListProps = {
    /**
     * Данные для отображение
     */
    children: ReactElement[];

    /**
     * Индикатор загрузки
     */
    isLoading?: boolean;

    /**
     * Текст о том, что не найдено
     */
    titleNoLength?: string;

    /**
     * Сцепление для react-view
     */
    observedRef: RefCallback<HTMLDivElement>;
};

/**
 * Отображение списка, который можно прокручивать
 */
const InfinityList = ({
    children,
    isLoading,
    titleNoLength,
    observedRef,
}: InfinityListProps) => {
    const styles = useStyles();

    return (
        <Box>
            {children && children.length ? (
                <>
                    <Stack direction={'column'} gap={'12px'}>
                        {children}
                    </Stack>
                    {isLoading && (
                        <CircularProgress
                            size={64}
                            thickness={4}
                            sx={styles.loader}
                        />
                    )}
                    {observedRef !== undefined && <Box ref={observedRef} />}
                </>
            ) : (
                !isLoading &&
                titleNoLength && (
                    <Typography sx={styles.title}>{titleNoLength}</Typography>
                )
            )}
        </Box>
    );
};

export default InfinityList;
