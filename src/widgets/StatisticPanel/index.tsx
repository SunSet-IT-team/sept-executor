import {FC} from 'react';
import {IncomeCard} from '../../entities/stats/IncomeCard';
import {Box} from '@mui/material';
import {StatsBlock} from '../../entities/stats/StatsBlock';

export const StatisticPanel: FC = () => {
    return (
        <Box>
            <IncomeCard incomeForMonth={'12500'} incomeTotal={'65500'} />
            <StatsBlock
                title={'Данные за последний месяц'}
                callsAmoute={'38'}
                closedAmoute={'38'}
                rejectedAmoute={'38'}
                sx={{
                    mt: '30px',
                }}
            />
            <StatsBlock
                title={'Общая статистика за все время'}
                callsAmoute={'380'}
                closedAmoute={'50'}
                rejectedAmoute={'260'}
                sx={{
                    mt: '25px',
                }}
            />
        </Box>
    );
};
