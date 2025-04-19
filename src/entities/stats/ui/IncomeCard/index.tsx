import {Theme} from '@emotion/react';
import {Stack, SxProps, Typography} from '@mui/material';
import {useStyles} from './styles';

interface IncomeCardProps {
    incomeForMonth: string | number;
    incomeTotal: string | number;
    sx?: SxProps<Theme>;
}

/**
 * Карточка статистики дохода в месяц/за весь период.
 * Экран - Личный кабинет: статистика
 */
export const IncomeCard: React.FC<IncomeCardProps> = ({
    incomeForMonth,
    incomeTotal,
    sx,
}) => {
    const styles = useStyles(sx);

    return (
        <Stack direction={'row'} spacing={2} sx={styles.root}>
            <Stack direction={'column'} spacing={'6px'} sx={styles.rowItem}>
                <Typography sx={styles.rowItem__value}>
                    {incomeForMonth}
                </Typography>
                <Typography>доход за месяц</Typography>
            </Stack>
            <Stack direction={'column'} spacing={'6px'} sx={styles.rowItem}>
                <Typography sx={styles.rowItem__value}>
                    {incomeTotal}
                </Typography>
                <Typography>доход за весь период</Typography>
            </Stack>
        </Stack>
    );
};
