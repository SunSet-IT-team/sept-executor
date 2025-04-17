import {FC} from 'react';
import {IncomeCard} from '../../entities/stats/IncomeCard';
import {Box} from '@mui/material';
import {StatsBlock} from '../../entities/stats/StatsBlock/StatsBlock';
import {IStats} from '../../entities/stats/model/types';
import {useStyles} from './styles';

interface IProps {
    stats: IStats;
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
                incomeForMonth={stats.incomeForMonth}
                incomeTotal={stats.incomeTotal}
            />
            <StatsBlock
                title={'Данные за последний месяц'}
                callsAmoute={stats.stats_for_month.callsAmoute}
                closedAmoute={stats.stats_for_month.closedAmoute}
                rejectedAmoute={stats.stats_for_month.rejectedAmoute}
                sx={styles.firstStatsBlock}
            />
            <StatsBlock
                title={'Общая статистика за все время'}
                callsAmoute={stats.stats_total.callsAmoute}
                closedAmoute={stats.stats_total.closedAmoute}
                rejectedAmoute={stats.stats_total.rejectedAmoute}
                sx={styles.secondStatsBlock}
            />
        </Box>
    );
};
