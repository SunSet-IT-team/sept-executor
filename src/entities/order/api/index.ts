import api from '../../../app/api';
import {OrderApiMethods} from './types';

/**
 * API для заказов
 */
export const orderApi: OrderApiMethods = {
    getOrders: (param) => {
        const page = param.page || 1;
        const limit = param.limit || 10;
        const url = `/order/my?page=${page}&limit=${limit}`;

        return api.get(url);
    },
};
