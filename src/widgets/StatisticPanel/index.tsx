import {FC} from 'react';
import {Box} from '@mui/material';
import {Stats} from '../../entities/stats/model/types';
import {useStyles} from './styles';
import {StatsBlock} from '../../entities/stats/ui/StatsBlock/StatsBlock';
import {IncomeCard} from '../../entities/stats/ui/IncomeCard';

interface IProps {
    stats: Stats;
}

/**
 * Панель статистики исполнителя.
 * Экран - Личный кабинет: статистика
 */
export const StatisticPanel: FC<IProps> = ({stats}) => {
    const styles = useStyles();

    return (
        <Box>
            <IncomeCard
                incomeForMonth={stats.income.month}
                incomeTotal={stats.income.total}
            />
            <StatsBlock
                title={'Данные за последний месяц'}
                callsAmoute={stats.statsMonth.calls}
                closedAmoute={stats.statsMonth.closed}
                rejectedAmoute={stats.statsMonth.rejected}
                sx={styles.firstStatsBlock}
            />
            <StatsBlock
                title={'Общая статистика за все время'}
                callsAmoute={stats.statsTotal.calls}
                closedAmoute={stats.statsTotal.closed}
                rejectedAmoute={stats.statsTotal.rejected}
                sx={styles.secondStatsBlock}
            />
        </Box>
    );
};
