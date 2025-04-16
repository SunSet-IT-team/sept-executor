import api from '../../../app/api';
import {OrderApiMethods} from './types';

/**
 * API для заказов
 */
export const orderApi: OrderApiMethods = {
    getOrders: (param) => api.get(`/order/my`),
};
