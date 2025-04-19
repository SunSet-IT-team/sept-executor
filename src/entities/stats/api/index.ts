import api from '../../../app/api';
import {StatsApiMethods} from './types';

/**
 * API для взаимодействия с чатами
 */
export const StatsApi: StatsApiMethods = {
    getStats: () => api.get(`/executor/me/stats`),
};
