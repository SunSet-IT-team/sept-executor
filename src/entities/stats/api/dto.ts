import {ServerAns} from '../../../shared/types/share';

/**
 * DTO для получения статистики
 */
export type GetStatsDTO = ServerAns<{
    rating: number;
    income: {
        month: number;
        total: number;
    };
    statsMonth: {
        calls: number;
        closed: number;
        rejected: number;
    };
    statsTotal: {
        calls: number;
        closed: number;
        rejected: number;
    };
}>;
