import api from '../../../app/api';
import {OrderApiMethods} from './types';

/**
 * API для заказов
 */
export const orderApi: OrderApiMethods = {
    getOrders: (param) => {
        const page = param.page || 1;
        const limit = param.limit || 10;
        let url = `/order/my?page=${page}&limit=${limit}`;

        if (param.status) {
            url += `&status=${param.status}`;
        }

        return api.get(url);
    },

    getOrderById: (id) => {
        return api.get(`/order/${id}`);
    },

    acceptOrder: (id) => {
        return api.post(`/order/${id}/accept`);
    },

    rejectOrder: (id) => {
        return api.post(`/order/${id}/reject`);
    },

    completeOrder: (id, param) => {
        return api.post(`/order/${id}/complete`, param, {
            headers: {'Content-Type': 'multipart/form-data'},
        });
    },
};
